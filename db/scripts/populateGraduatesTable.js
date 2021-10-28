const { query } = require("../index"); //importing query

const graduateData = require("../../data/dummyDataGraduates.json");

async function populateGraduatesTable(data) {
  data.forEach(async (item) => {
    const {
      graduate_uuid,
      graduate_name,
      graduate_email,
      cohort,
      graduation_date,
      first_job_date,
    } = item;
    const data = await query(
      "INSERT INTO graduates (id, graduate_name, graduate_email, cohort, graduation_date, first_job_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
      [
        graduate_uuid,
        graduate_name,
        graduate_email,
        cohort,
        graduation_date,
        first_job_date,
      ]
    );
  });
}
populateGraduatesTable(graduateData);
