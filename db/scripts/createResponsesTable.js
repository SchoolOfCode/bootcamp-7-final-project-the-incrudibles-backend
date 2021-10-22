const { query } = require("../index"); //importing query

async function createResponsesTable() {
  await query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  await query(
    "CREATE TABLE responses (id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), graduateUuid UUID NOT NULL REFERENCES graduates (id), timestamp TIMESTAMP, isEmployed BOOL, techRole BOOL, currentSalary INTEGER, currentEmployer VARCHAR(255), lengthOfService VARCHAR(20), currentRole TEXT, currentTechStack TEXT [], jobSatisfaction SMALLINT)"
  );
  console.log("responses table has been created");
  return;
}
createResponsesTable();
