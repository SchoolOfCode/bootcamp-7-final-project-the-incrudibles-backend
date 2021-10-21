const { query } = require("../index"); //importing query

async function createResponsesTable() {
  await query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  await query(
    "CREATE TABLE responses (id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), graduateUuid UUID NOT NULL REFERENCES graduates (id), isEmployed BOOLEAN, techRole BOOLEAN, currentSalary INTEGER, currentEmployer VARCHAR(255), lengthOfService VARCHAR(255), currentRole TEXT, currentTechStack TEXT [], jobSatisfaction INTEGER)"
  );
  console.log("responses table has been created");
  return;
}
createResponsesTable();
