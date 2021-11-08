const {
  getTechnologyByName,
  getTechnologyById,
} = require("../models/technologies");

describe("Tech table in DB", () => {
  test("Javascript is found in table", () => {
    return getTechnologyByName("Javascript").then((data) => {
      expect(data).toEqual({
        id: expect.any(Number),
        name: "Javascript",
      });
    });
  });

  test("A tech of id 1 is found in table", () => {
    return getTechnologyById(1).then((data) => {
      expect(data).toEqual({
        id: 1,
        name: expect.any(String),
      });
    });
  });
});
