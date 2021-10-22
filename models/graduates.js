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
  return data.rows;
}
//function that takes in a uuid, and deletes all graduates with that uuid
async function deleteGraduateByUuid(uuid) {
  const data = await query("DELETE FROM graduates WHERE id = $1;", [uuid]);
  return data.rows;
}
//function that takes in a graduate object, and creates a new graduate row in the DB
async function postNewGraduate(graduate) {
  const { graduateName, graduateEmail, cohort } = graduate;
  const data = await query(
    "INSERT INTO graduates (graduateName, graduateEmail, cohort) VALUES ($1,$2,$3) RETURNING *;",
    [graduateName, graduateEmail, cohort]
  );
  return data.rows;
}
//function that takes in a graduate object and a uuid, and updates a graduate matching the uuid in the DB with that object
async function updateGraduate(graduate, uuid) {
  const { graduateName, graduateEmail, cohort } = graduate;
  const data = await query(
    "UPDATE graduates SET graduateName = $1, graduateEmail = $2, cohort = $3 WHERE id = $4;",
    [graduateName, graduateEmail, cohort, uuid]
  );
  return data.rows;
}

module.exports = {
  getAllGraduates,
  getGraduateByUuid,
  deleteGraduateByUuid,
  postNewGraduate,
  updateGraduate,
};
