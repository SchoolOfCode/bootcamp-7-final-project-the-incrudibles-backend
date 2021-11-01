//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

async function getJoinById(id) {
  const data = await query("SELECT * FROM tech_join WHERE id = $1;", [id]);
  return data.rows[0];
}

async function deleteJoinById(id) {
  const data = await query("DELETE FROM tech_join WHERE id = $1;", [id]);
  return data.rows[0];
}

async function deleteJoinByResponseId(id) {
  const data = await query("DELETE FROM tech_join WHERE response_id = $1;", [
    id,
  ]);
  return data.rows[0];
}

async function addJoin(join) {
  const { response_id, tech_id } = join;
  console.log("response_id", response_id);
  console.log("tech_id", tech_id);
  const data = await query(
    "INSERT INTO tech_join (response_id, tech_id) VALUES ($1,$2) RETURNING *;",
    [response_id, tech_id]
  );
  return data.rows[0];
}

module.exports = {
  getJoinById,
  deleteJoinById,
  addJoin,
  deleteJoinByResponseId,
};
