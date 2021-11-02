const { query } = require("../index"); //importing query

const responsesData = require("../../data/dummyDataResponses.json");

async function populateResponsesTable(data) {
  data.forEach(async (item) => {
    const {
      graduate_uuid,
      timestamp,
      tech_role,
      current_salary,
      current_employer,
      length_of_service,
      current_position,
      job_satisfaction,
    } = item;
    const data = await query(
      "INSERT INTO responses (graduate_uuid, timestamp, tech_role, current_salary, current_employer, length_of_service, current_position, job_satisfaction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
      [
        graduate_uuid,
        timestamp,
        tech_role,
        current_salary,
        current_employer,
        length_of_service,
        current_position,
        job_satisfaction,
      ]
    );
  });
}
populateResponsesTable(responsesData);
