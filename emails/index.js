const usFour = require("../data/usFour");
const html = require("../emails/index.html");

const graduateemail = "himeshpatel@live.co.uk";
const id = "abbfe044-3b3d-4921-92c2-18a1ab7601d5";

const message = {
  to: graduateemail,
  from: {
    name: "SoC",
    email: "incrudibles@hotmail.com",
  },
  subject: "sendGrid Test",
  text: "Hello from SendGrid",
  html: html,
};



module.exports = message;
