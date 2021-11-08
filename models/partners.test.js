const { getPartnerById } = require("./partners");

describe("Partners tests", () => {
  test("Partner with id 1 is returned form the db", () => {
    return getPartnerById(1).then((data) => {
      expect(data).toEqual({
        id: 1,
        org_name: expect.any(String),
        is_sponsor: expect.any(Boolean),
        is_partner: expect.any(Boolean),
      });
    });
  });
});
