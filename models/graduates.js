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
  const { graduate_name, graduate_email, cohort, graduation_date, first_job_date } = graduate;
  const data = await query(
    "INSERT INTO graduates (graduate_name, graduate_email, cohort, graduation_date, first_job_date) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
    [graduate_name, graduate_email, cohort, graduation_date, first_job_date]
  );
  return data.rows[0];
}
//function that takes in a graduate object and a uuid, and updates a graduate matching the uuid in the DB with that object
async function updateGraduate(graduate, uuid) {
  const { graduate_name, graduate_email, cohort, graduation_date, first_job_date } = graduate;
  const data = await query(
    "UPDATE graduates SET graduate_name = $1, graduate_email = $2, cohort = $3, graduation_date = $4, first_job_date = $5 WHERE id = $6;",
    [graduate_name, graduate_email, cohort, graduation_date, first_job_date, uuid]
  );
  return data.rows[0];
}

//function that takes in a graduate object and a uuid, and updates a graduate matching the uuid in the DB with that object
async function patchGraduate(key, value, uuid) {
  const data = await query(
    `UPDATE graduates SET ${key} = $1 WHERE id=$2 RETURNING *;`,
    [value, uuid]
  );
  return data.rows[0];
}

module.exports = {
  getAllGraduates,
  getGraduateByUuid,
  deleteGraduateByUuid,
  postNewGraduate,
  updateGraduate,
  patchGraduate,
};
