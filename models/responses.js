//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

//function that takes in a uuid, and deletes all responses with that uuid
async function deleteResponseById(uuid) {
  const data = await query("DELETE FROM responses WHERE id = $1;", [uuid]);
  return data.rows;
}

//function that takes in a response object, and creates a new response row in the DB
async function postNewResponse(response, graduateUuid) {
  const {
    isEmployed,
    techRole,
    currentSalary,
    currentEmployer,
    lengthOfService,
    currentRole,
    currentTechStack,
    jobSatisfaction,
  } = response;
  const data = await query(
    "INSERT INTO responses (graduateUuid, isEmployed, techRole, currentSalary, currentEmployer, lengthOfService, currentRole, currentTechStack, jobSatisfaction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;",
    [
      graduateUuid,
      isEmployed,
      techRole,
      currentSalary,
      currentEmployer,
      lengthOfService,
      currentRole,
      currentTechStack,
      jobSatisfaction,
    ]
  );
  return data.rows;
}

//function that takes in a graduateuuid, and returns all responses associtaed with that graduate
async function getResponseByGraduateId(uuid) {
  const data = await query(
    "SELECT * FROM responses INNER JOIN graduates ON (responses.graduateuuid = graduates.id) WHERE graduateuuid = $1;",
    [uuid]
  );
  return data.rows;
}

//function that returns all responses from the DB, as well as the associated graduate info
async function getAllResponses() {
  const data = await query(
    "SELECT * FROM responses INNER JOIN graduates ON (responses.graduateuuid = graduates.id);"
  );
  return data.rows;
}

module.exports = {
  deleteResponseById,
  postNewResponse,
  getResponseByGraduateId,
  getAllResponses,
};
