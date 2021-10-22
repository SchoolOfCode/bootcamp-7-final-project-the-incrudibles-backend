var express = require("express");
var router = express.Router();

const {
  getAllResponses,
  deleteResponseById,
  postNewResponse,
} = require("../models/responses");

/* GET all responses listing. */
router.get("/", async (req, res) => {
  const data = await getAllResponses();
  res.json({
    success: true,
    message: "Here are all the repsonses",
    payload: data,
  });
});

// GET response by param

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteResponseById(id);
  res.json({
    success: true,
    message: `Response ${id} has been deleted form the database`,
    payload: data,
  });
});

router.post("/:id", async (req, res) => {
  const response = req.body;
  const data = await postNewResponse(response);
  res.json({
    success: true,
    message: `Response has been added to the database`,
    payload: data,
  });
});

module.exports = router;
