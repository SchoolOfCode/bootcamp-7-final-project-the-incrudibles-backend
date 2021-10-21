const { query } = require("../index"); //importing query

async function createGraduatesTable() {
  const response = query(
    "CREATE TABLE graduates (id SERIAL PRIMARY KEY, graduateUuid TEXT, graduateName TEXT, graduateEmail TEXT, cohort INTEGER)"
  );
  console.log("graduates table has been created");
  return;
}
createGraduatesTable();
