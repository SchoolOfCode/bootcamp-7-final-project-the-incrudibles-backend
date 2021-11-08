const {
  getGraduateByUuid
} = require("./graduates");

describe("Graduates tests", () => {
  test("Graduate with id 9960760f-b212-49b4-b973-331d5be32da8 is returned form the db", () => {
    return getGraduateByUuid(
      "9960760f-b212-49b4-b973-331d5be32da8"
    ).then((data) => {
      expect(data).toEqual({
        id: "9960760f-b212-49b4-b973-331d5be32da8",
        graduate_name: expect.any(String),
        graduate_email: expect.any(String),
        cohort: expect.any(Number),
        graduation_date: expect.any(Date),
        first_job_date: expect.any(Date)
    });
    });
  });
});
