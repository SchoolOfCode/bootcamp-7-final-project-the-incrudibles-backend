const { query } = require("../index"); //importing query

const techData = require("../../data/dummyDataTechnologies.json");

async function populateTechnologiesTable(data) {
  data.forEach(async (item) => {
    const data = await query(
      "INSERT INTO technologies (name) VALUES ($1) RETURNING *;",
      [item.name]
    );
  });
}
populateTechnologiesTable(techData);
