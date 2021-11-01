const { query } = require("../index"); //importing query

async function dropJoinTable() {
  const response = await query("DROP TABLE IF EXISTS tech_join;");
  console.log("Tech_join table has been deleted");
  return;
}
dropJoinTable();
