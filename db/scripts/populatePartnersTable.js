const { query } = require("../index"); //importing query

const partnersData = require("../../data/dummyDataPartners.json");

async function populatePartnersTable(data) {
  data.forEach(async (item) => {
    const { org_name, is_sponsor, is_partner } = item;
    const data = await query(
      "INSERT INTO partners (org_name, is_sponsor, is_partner) VALUES ($1,$2,$3) RETURNING *;",
      [org_name, is_sponsor, is_partner]
    );
  });
}
populatePartnersTable(partnersData);
