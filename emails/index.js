const sgMail = require("@sendgrid/mail");
const API_KEY = "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";
sgMail.setApiKey(API_KEY);

const graduateemail = "himeshpatel@live.co.uk"
const id = "7c35e8f1-45e2-4351-829e-94e6b222e0ac"
const name = "Himesh"

/*
const message = {
  to: graduateemail,
  from: {
    name: "SoC",
    email: "incrudibles@hotmail.com",
  },
  subject: "sendGrid Test",
  template_id: " d-f737af32cca54db481684f36144d0491"
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