const { query } = require("../index"); //importing query

async function createResponsesTable() {
  await query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  await query(
    "CREATE TABLE responses (id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), graduate_uuid UUID NOT NULL REFERENCES graduates (id), timestamp TIMESTAMP DEFAULT NOW(), tech_role BOOL, current_salary INTEGER, current_employer VARCHAR(255), length_of_service VARCHAR(20), current_position VARCHAR(50), current_tech_stack TEXT [], job_satisfaction SMALLINT);"
  );
  console.log("responses table has been created");
  return;
}
createResponsesTable();
