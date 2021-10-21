var express = require("express");
var router = express.Router();

/* GET all responses listing. */
router.get("/", function(req, res, next) {
  res.send("This is the responses router");
});

// GET response by param

module.exports = router;
