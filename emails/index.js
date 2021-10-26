const usFour = require("../data/usFour");

const message = {
  to: `siddharthnair87@outlook.com`,
  from: {
    name: "SoC",
    email: "incrudibles@hotmail.com",
  },
  subject: "sendGrid Test",
  text: "Hello from SendGrid",
  html: `<a href="https://6177eb8e12fc6c27f8d45523--peaceful-darwin-2d2aa9.netlify.app?graduates=7c35e8f1-45e2-4351-829e-94e6b222e0ac">Click here</a>`,
};

module.exports = message;
