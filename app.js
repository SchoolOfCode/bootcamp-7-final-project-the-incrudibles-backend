var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
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

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
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
  res.render("error");
});

module.exports = app;
