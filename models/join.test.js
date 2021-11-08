const { getJoinById } = require("./join");

describe("Joins tests", () => {
  test("Join with id 1 is returned form the db", () => {
    return getJoinById(1).then((data) => {
      expect(data).toEqual({
        id: 1,
        response_id: expect.any(Number),
        tech_id: expect.any(Number),
      });
    });
  });
});
