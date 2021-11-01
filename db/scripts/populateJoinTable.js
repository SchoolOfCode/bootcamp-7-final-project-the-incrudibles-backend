const { query } = require("../index"); //importing query

const joinData = require("../../data/dummyDataJoin.json");

async function populateTechnologiesTable(data) {
  data.forEach(async (item) => {
    const { response_id, tech_id } = item;
    const data = await query(
      "INSERT INTO tech_join (response_id, tech_id) VALUES ($1,$2) RETURNING *;",
      [response_id, tech_id]
    );
  });
}
populateTechnologiesTable(joinData);
