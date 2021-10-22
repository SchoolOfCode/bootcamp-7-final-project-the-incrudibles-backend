const { query } = require("../index"); //importing query

async function createGraduatesTable() {
  await query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  await query(
    "CREATE TABLE graduates (id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), graduateName VARCHAR(255) NOT NULL, graduateEmail VARCHAR(255), cohort SMALLINT)"
  );
  console.log("graduates table has been created");
  return;
}

createGraduatesTable();
