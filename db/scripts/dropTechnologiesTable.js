const { query } = require("../index"); //importing query

async function dropTechnologiesTable() {
  const response = await query("DROP TABLE IF EXISTS technologies;");
  console.log("technologies table has been deleted");
  return;
}
dropTechnologiesTable();
