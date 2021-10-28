/*const graduateemail = "nasra_diini@hotmail.com"
const id = "9960760f-b212-49b4-b973-331d5be32da8"
*/

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
  to: 'himeshpatel@live.co.uk',
  from: {
    name: "SoC",
    email: "incrudibles@hotmail.com",
  },
  templateId: 'd-f737af32cca54db481684f36144d0491',

  dynamic_template_data: {
    example: '',
  },
};

module.exports = message;

