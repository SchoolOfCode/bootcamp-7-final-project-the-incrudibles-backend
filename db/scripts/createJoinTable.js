const { query } = require("../index"); //importing query

async function createJoinTable() {
  await query(
    "CREATE TABLE tech_join (id SERIAL PRIMARY KEY, response_id SMALLINT NOT NULL, tech_id SMALLINT NOT NULL);"
  );
  console.log("Tech_join table has been created");
  return;
}

createJoinTable();
