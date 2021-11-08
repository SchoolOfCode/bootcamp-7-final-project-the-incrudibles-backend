const { getResponsesByGraduateUuid } = require("./responses");

describe("Responses tests", () => {
  test("Response found for graduate id 9960760f-b212-49b4-b973-331d5be32da8", () => {
    return getResponsesByGraduateUuid(
      "9960760f-b212-49b4-b973-331d5be32da8"
    ).then((data) => {
      expect(data).toEqual([
        {
          id: "9960760f-b212-49b4-b973-331d5be32da8",
          graduate_name: "Zayden Mcgrath",
          graduate_email: expect.any(String),
          cohort: 4,
          graduation_date: expect.any(Date),
          first_job_date: expect.any(Date),
          responses: expect.any(Array),
        },
      ]);
    });
  });
});
