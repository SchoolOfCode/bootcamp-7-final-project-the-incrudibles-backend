const { query } = require("../index"); //importing query

async function createPartnersTable() {
  await query(
    "CREATE TABLE partners (id SERIAL PRIMARY KEY, org_name VARCHAR(255) NOT NULL, is_sponsor BOOL NOT NULL, is_partner BOOL NOT NULL);"
  );
  console.log("Partners table has been created");
  return;
}

createPartnersTable();
