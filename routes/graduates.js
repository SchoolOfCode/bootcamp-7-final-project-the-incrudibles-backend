var express = require("express");
const { getAllGraduates } = require("../models/graduates");
var router = express.Router();

router.get("/", async (req, res) => {
  const data = await getAllGraduates();
  res.json({
    success: true,
    message: "Here are all the graduates",
    payload: data,
  });
});

module.exports = router;
