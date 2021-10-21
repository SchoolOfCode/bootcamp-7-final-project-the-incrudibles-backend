const { query } = require("../index"); //importing query

async function dropGraduatesTable() {
  const response = query("DROP TABLE IF EXISTS graduates;");
  console.log("graduates table has been deleted");
  return;
}
dropGraduatesTable();
