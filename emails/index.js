const usFour = require("../data/usFour");

const graduateemail = "himeshpatel@live.co.uk"
const id = "abbfe044-3b3d-4921-92c2-18a1ab7601d5"

const message = {
  to: graduateemail,
  from: {
    name: "SoC",
    email: "incrudibles@hotmail.com",
  },
  subject: "sendGrid Test",
  text: "Hello from SendGrid",
  html: `<a href="https://peaceful-darwin-2d2aa9.netlify.app/?graduates=${id}">Click here</a>`,
};

module.exports = message;
