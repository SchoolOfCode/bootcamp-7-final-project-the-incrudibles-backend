const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

<<<<<<< HEAD
const responsesRouter = require("./routes/responses");
const graduatesRouter = require("./routes/graduates");
const partnersRouter = require("./routes/partners");
const technologiesRouter = require("./routes/technologies");
=======
const sgMail = require("@sendgrid/mail");
const API_KEY =
  "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";
const message = require("./emails/index");
console.log(message);
sgMail.setApiKey(API_KEY);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var responsesRouter = require("./routes/responses");
var graduatesRouter = require("./routes/graduates");
var partnersRouter = require("./routes/partners");
>>>>>>> email

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/technologies", technologiesRouter);
app.use("/responses", responsesRouter);
app.use("/graduates", graduatesRouter);
app.use("/partners", partnersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//Content of email message

sgMail
  .send(message)
  .then((response) => {
    console.log("Email has been sent!");
  })
  .catch((error) => console.log(error.message));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    success: false,
    message: "Invalid endpoint",
  });
});

module.exports = app;
