const { query } = require("../index"); //importing query

const responsesData = require("../../data/dummyDataResponses.json");

async function populateResponsesTable(data) {
  data.forEach(async (item) => {
    const {
      id,
      graduateUuid,
      isEmployed,
      techRole,
      currentSalary,
      currentEmployer,
      lengthOfService,
      currentRole,
      currentTechStack,
      jobSatisfaction,
    } = item;
    const data = await query(
      "INSERT INTO responses (id, graduateUuid, isEmployed, techRole, currentSalary, currentEmployer, lengthOfService, currentRole, currentTechStack, jobSatisfaction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;",
      [
        id,
        graduateUuid,
        isEmployed,
        techRole,
        currentSalary,
        currentEmployer,
        lengthOfService,
        currentRole,
        currentTechStack,
        jobSatisfaction,
      ]
    );
  });
}
populateResponsesTable(responsesData);
