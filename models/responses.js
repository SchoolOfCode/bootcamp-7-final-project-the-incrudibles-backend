//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

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
    "INSERT INTO responses (graduate_uuid, tech_role, current_salary, current_employer, length_of_service, current_position, current_tech_stack, job_satisfaction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
    [
      graduateUuid,
      tech_role,
      current_salary,
      current_employer,
      length_of_service,
      current_position,
      current_tech_stack,
      job_satisfaction,
    ]
  );
  return data.rows[0];
}

//function that takes in a graduateuuid, and returns all responses associtaed with that graduate
async function getResponsesByGraduateUuid(uuid) {
  const data = await query(
    "SELECT * FROM responses INNER JOIN graduates ON (responses.graduate_uuid = graduates.id) WHERE graduate_uuid = $1;",
    [uuid]
  );
  return data.rows;
}

//function that returns all responses from the DB, as well as the associated graduate info
async function getAllResponses() {
  const data = await query(
    "SELECT g.id, g.graduate_name, g.graduate_email, g.cohort, g.graduation_date, g.first_job_date, json_agg(r.*) as responses FROM graduates g INNER JOIN responses r ON (r.graduate_uuid = g.id) GROUP BY g.id;"
  );
  return data.rows;
}

module.exports = {
  deleteResponseById,
  postNewResponse,
  getResponsesByGraduateUuid,
  getAllResponses,
};
