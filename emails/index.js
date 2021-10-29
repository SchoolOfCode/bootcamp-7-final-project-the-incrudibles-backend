<<<<<<< HEAD
const usFour = require("../data/usFour");
const html = require("../emails/index.html");

const graduateemail = "himeshpatel@live.co.uk";
const id = "abbfe044-3b3d-4921-92c2-18a1ab7601d5";
=======
const sgMail = require("@sendgrid/mail");
const API_KEY = "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";
sgMail.setApiKey(API_KEY);

const graduateemail = "himeshpatel@live.co.uk"
const id = "9960760f-b212-49b4-b973-331d5be32da8"
const name = "himesh"
>>>>>>> 0fd6b0e8dd3414a37a5226591a0863582227bf7a

/*
const message = {
  to: graduateemail,
  from: {
    name: "SoC",
    email: "incrudibles@hotmail.com",
  },
  subject: "sendGrid Test",
<<<<<<< HEAD
  text: "Hello from SendGrid",
  html: html,
=======
  template_id: " d-f737af32cca54db481684f36144d0491"
>>>>>>> 0fd6b0e8dd3414a37a5226591a0863582227bf7a
};
*/
const message = {
  to: graduateemail,
  from: {
    name: "School Of Code",
    email: "incrudibles@hotmail.com",
  },
  templateId: 'd-f737af32cca54db481684f36144d0491',
  subject: "Beyond Bootcamp",
  dynamic_template_data: {
    id: id,
    name: name
  },
};

sgMail
  .send(message)
  .then((response) => {
    console.log(message);
    console.log("Email has been sent!");
  })
  .catch((error) => console.log(error.message));

<<<<<<< HEAD


module.exports = message;
=======
>>>>>>> 0fd6b0e8dd3414a37a5226591a0863582227bf7a
