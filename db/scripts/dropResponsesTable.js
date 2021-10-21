const { query } = require("../index"); //importing query

async function dropResponsesTable() {
  const response = await query("DROP TABLE IF EXISTS responses;");
  console.log("responses table has been deleted");
  return;
}
dropResponsesTable();
