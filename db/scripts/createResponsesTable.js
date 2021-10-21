const { query } = require("../index"); //importing query

async function createResponsesTable() {
  const response = query(
    "CREATE TABLE responses (id SERIAL PRIMARY KEY, responseUuid TEXT, graduateUuid TEXT, isEmployed BOOLEAN, techRole BOOLEAN, currentSalary INTEGER, currentEmployer VARCHAR(255), lengthOfService VARCHAR(255), currentRole TEXT, currentTechStack TEXT [], jobSatisfaction INTEGER)"
  );
  console.log("responses table has been created");
  return;
}
createResponsesTable();
