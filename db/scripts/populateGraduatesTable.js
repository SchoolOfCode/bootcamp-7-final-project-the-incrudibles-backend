const { query } = require("../index"); //importing query

const graduateData = require("../../data/dummyDataGraduates.json");

async function populateGraduatesTable(data) {
  data.forEach(async (item) => {
    const { graduate_uuid, graduate_name, graduate_email, cohort } = item;
    const data = await query(
      "INSERT INTO graduates (id, graduate_name, graduate_email, cohort) VALUES ($1,$2,$3,$4) RETURNING *;",
      [graduate_uuid, graduate_name, graduate_email, cohort]
    );
  });
}
populateGraduatesTable(graduateData);
