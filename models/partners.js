//import 'query' that we created in db/index.js so we can use it here instead
const { query } = require("../db/index");

async function getAllPartners() {
  const data = await query("SELECT * FROM partners;");
  return data.rows;
}

async function getPartnerById(id) {
  const data = await query("SELECT * FROM partners WHERE id = $1;", [id]);
  return data.rows[0];
}
async function deletePartnerById(id) {
  const data = await query("DELETE FROM partners WHERE id = $1;", [id]);
  return data.rows[0];
}

async function createPartner(partner) {
  const { org_name, is_sponsor, is_partner } = partner;
  const data = await query(
    "INSERT INTO partners (org_name, is_sponsor, is_partner) VALUES ($1,$2,$3) RETURNING *;",
    [org_name, is_sponsor, is_partner]
  );
  return data.rows[0];
}

async function updatePartner(partner, id) {
  const { org_name, is_sponsor, is_partner } = partner;
  const data = await query(
    "UPDATE partners SET org_name = $1, is_sponsor = $2, is_partner = $3 WHERE id = $4;",
    [org_name, is_sponsor, is_partner, id]
  );
  return data.rows[0];
}

module.exports = {
  getAllPartners,
  getPartnerById,
  deletePartnerById,
  createPartner,
  updatePartner,
};
