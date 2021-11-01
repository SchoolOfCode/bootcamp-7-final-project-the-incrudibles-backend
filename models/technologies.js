//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

async function getAllTechnologies() {
  const data = await query("SELECT * FROM technologies;");
  return data.rows;
}

async function getTechnologyById(id) {
  const data = await query("SELECT * FROM technologies WHERE id = $1;", [id]);
  return data.rows[0];
}

async function deleteTechnologyById(id) {
  const data = await query("DELETE FROM technologies WHERE id = $1;", [id]);
  return data.rows[0];
}

async function postNewTechnology(tech) {
  const data = await query(
    "INSERT INTO technologies (name) VALUES ($1) RETURNING *;",
    [tech.name]
  );
  return data.rows[0];
}

module.exports = {
  getAllTechnologies,
  getTechnologyById,
  deleteTechnologyById,
  postNewTechnology,
};
