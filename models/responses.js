//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");
const {
  getTechnologyByName,
  addTechnology,
} = require("../models/technologies");
const { addJoin } = require("../models/join");

//function that takes in a uuid, and deletes all responses with that uuid
async function deleteResponseById(id) {
  const data = await query("DELETE FROM responses WHERE id = $1;", [id]);
  return data.rows[0];
}

//function that takes in a response object, and creates a new response row in the DB
async function postNewResponse(response, graduateUuid) {
  const {
    tech_role,
    current_salary,
    current_employer,
    length_of_service,
    current_position,
    current_tech_stack,
    job_satisfaction,
  } = response;
  const data = await query(
    "INSERT INTO responses (graduate_uuid, tech_role, current_salary, current_employer, length_of_service, current_position, job_satisfaction) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;",
    [
      graduateUuid,
      tech_role,
      current_salary,
      current_employer,
      length_of_service,
      current_position,
      job_satisfaction,
    ]
  );
  current_tech_stack.forEach(async (item) => {
    const techId = await getTechnologyByName(item);
    if (!techId) {
      await addTechnology({ name: item });
    }
    const joinBody = {
      response_id: data.rows[0].id,
      tech_id: techId.id,
    };
    console.log(joinBody);
    await addJoin(joinBody);
  });
  return data.rows[0];
}

//function that takes in a graduateuuid, and returns all responses associtaed with that graduate
async function getResponsesByGraduateUuid(uuid) {
  const data = await query(
    `
  SELECT
    	g.id, g.graduate_name, g.graduate_email, g.cohort, g.graduation_date, g.first_job_date,
        (
        	SELECT jsonb_agg(nested_response)
        	FROM (
	        	SELECT
		     		r.*,
		     		(
		     			SELECT json_agg(nested_technology)
		     			FROM (
		     				SELECT
		     				t.name
			     			FROM technologies t
                INNER JOIN tech_join ON (tech_join.tech_id = t.id)
		            WHERE r.id = tech_join.response_id
		     			) AS nested_technology
		     		) AS current_tech_stack
		        FROM responses r
		        WHERE g.id = r.graduate_uuid
            ORDER BY r.timestamp
        	) AS nested_response
        ) AS responses
    FROM graduates g
    WHERE g.id = $1;
  `,
    [uuid]
  );
  return data.rows;
}

//function that returns all responses from the DB, as well as the associated graduate info
async function getAllResponses() {
  const data = await query(`
  SELECT
    	g.id, g.graduate_name, g.graduate_email, g.cohort, g.graduation_date, g.first_job_date,
        (
        	SELECT jsonb_agg(nested_response)
        	FROM (
	        	SELECT
		     		r.*,
		     		(
		     			SELECT json_agg(nested_technology)
		     			FROM (
		     				SELECT
		     				t.name
			     			FROM technologies t
                INNER JOIN tech_join ON (tech_join.tech_id = t.id)
		            WHERE r.id = tech_join.response_id
		     			) AS nested_technology
		     		) AS current_tech_stack
		        FROM responses r
		        WHERE g.id = r.graduate_uuid
            ORDER BY r.timestamp
        	) AS nested_response
        ) AS responses
    FROM graduates g;
  `);
  return data.rows;
}

module.exports = {
  deleteResponseById,
  postNewResponse,
  getResponsesByGraduateUuid,
  getAllResponses,
};
