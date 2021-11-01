const { query } = require("../index"); //importing query

async function createResponsesTable() {
  await query(
    "CREATE TABLE responses (id SERIAL PRIMARY KEY, graduate_uuid UUID NOT NULL REFERENCES graduates (id), timestamp TIMESTAMP DEFAULT NOW(), tech_role BOOL, current_salary INTEGER, current_employer VARCHAR(255), length_of_service VARCHAR(20), current_position VARCHAR(50), job_satisfaction SMALLINT);"
  );
  console.log("responses table has been created");
  return;
}
createResponsesTable();
