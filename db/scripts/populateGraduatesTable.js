const { postNewGraduate } = require("../../models/graduates");
const graduateData = require("../../data/dummyDataGraduates.json");

async function populateGraduatesTable(data) {
  data.forEach(async (item) => {
    postNewGraduate(item);
  });
}
populateGraduatesTable(graduateData);
