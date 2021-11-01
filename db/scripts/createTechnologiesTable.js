const { query } = require("../index"); //importing query

async function createTechnologiesTable() {
  await query(
    "CREATE TABLE technologies (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL);"
  );
  console.log("Technologies table has been created");
  return;
}

createTechnologiesTable();
