//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

//function that returns all graduates from the DB
async function getAllGraduates() {
  const data = await query("SELECT * FROM graduates;");
  return data.rows;
}

//function that takes in a uuid, and returns all graduates with that uuid
async function getGraduateByUuid(uuid) {
  const data = await query("SELECT * FROM graduates WHERE id = $1;", [uuid]);
  return data.rows[0];
}
//function that takes in a uuid, and deletes all graduates with that uuid
async function deleteGraduateByUuid(uuid) {
  const data = await query("DELETE FROM graduates WHERE id = $1;", [uuid]);
  return data.rows[0];
}
//function that takes in a graduate object, and creates a new graduate row in the DB
async function postNewGraduate(graduate) {
  const { graduate_name, graduate_email, cohort } = graduate;
  const data = await query(
    "INSERT INTO graduates (graduate_name, graduate_email, cohort) VALUES ($1,$2,$3) RETURNING *;",
    [graduate_name, graduate_email, cohort]
  );
  return data.rows[0];
}
//function that takes in a graduate object and a uuid, and updates a graduate matching the uuid in the DB with that object
async function updateGraduate(graduate, uuid) {
  const { graduate_name, graduate_email, cohort } = graduate;
  const data = await query(
    "UPDATE graduates SET graduate_name = $1, graduate_email = $2, cohort = $3 WHERE id = $4;",
    [graduate_name, graduate_email, cohort, uuid]
  );
  return data.rows[0];
}

module.exports = {
  getAllGraduates,
  getGraduateByUuid,
  deleteGraduateByUuid,
  postNewGraduate,
  updateGraduate,
};
