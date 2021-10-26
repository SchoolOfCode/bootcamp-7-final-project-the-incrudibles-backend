const { query } = require("../index"); //importing query

async function dropSponsorsTable() {
  const response = await query("DROP TABLE IF EXISTS partners;");
  console.log("Partners table has been deleted");
  return;
}
dropSponsorsTable();
