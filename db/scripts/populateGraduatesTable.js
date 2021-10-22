const { query } = require("../index"); //importing query

const graduateData = require("../../data/dummyDataGraduates.json");

async function populateGraduatesTable(data) {
  data.forEach(async (item) => {
    const { graduateUuid, graduateName, graduateEmail, cohort } = item;
    const data = await query(
      "INSERT INTO graduates (id, graduateName, graduateEmail, cohort) VALUES ($1,$2,$3,$4) RETURNING *;",
      [graduateUuid, graduateName, graduateEmail, cohort]
    );
  });
}
populateGraduatesTable(graduateData);
