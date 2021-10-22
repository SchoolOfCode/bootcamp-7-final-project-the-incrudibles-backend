//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

//function that takes in a uuid, and deletes all responses with that uuid
async function deleteResponseById(uuid) {
  const data = await query("DELETE FROM responses WHERE id = $1;", [uuid]);
  return data.rows;
}

//function that takes in a response object, and creates a new response row in the DB
async function postNewResponse(response) {
  const {
    responseUuid,
    graduateUuid,
    timestampUnix,
    isEmployed,
    techRole,
    currentSalery,
    currentEmployer,
    lengthOfService,
    currentRole,
    currentTechStack,
    jobsatisfaction,
  } = response;
  const data = await query(
    "INSERT INTO responses (responseUuid, graduateUuid, timestampUnix, isEmployed, techRole, currentSalery, currentEmployer, lengthOfService, currentRole, currentTechStack, jobsatisfaction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *;",
    [
      responseUuid,
      graduateUuid,
      timestampUnix,
      isEmployed,
      techRole,
      currentSalery,
      currentEmployer,
      lengthOfService,
      currentRole,
      currentTechStack,
      jobsatisfaction,
    ]
  );
  return data.rows;
}
//function that takes in a graduateuuid, and returns all responses associtaed with that graduate

async function getResponseById(graduateuuid) {
  const data = await query("SELECT * FROM responses WHERE id = $1;", [
    graduateuuid,
  ]);
  return data.rows;
}

//function that returns all responses from the DB, as well as the associated graduate info
