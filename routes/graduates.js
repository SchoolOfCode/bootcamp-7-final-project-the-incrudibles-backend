var express = require("express");
var router = express.Router();

const {
  getAllGraduates,
  getGraduateByUuid,
  deleteGraduateByUuid,
  postNewGraduate,
  updateGraduate,
} = require("../models/graduates");

const { getResponseByGraduateId } = require("../models/responses");

router.get("/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let data = await getGraduateByUuid(id);
  res.json({
    success: true,
    message: "Here is the graduate with id " + id,
    payload: data,
  });
});

router.get("/", async (req, res) => {
  console.log(req.params);
  const data = await getAllGraduates();
  res.json({
    success: true,
    message: "Here are all the graduates",
    payload: data,
  });
});

router.delete("/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const data = await deleteGraduateByUuid(id);
  res.json({
    success: true,
    message: `Graduate ${id} has been deleted form the database`,
    payload: data,
  });
});

router.post("/", async (req, res) => {
  const graduate = req.body;
  const data = await postNewGraduate(graduate);
  res.json({
    success: true,
    message: `Graduate ${graduate.graduateName} has been added to the database`,
    payload: data,
  });
});

router.post("/:id/responses", async (req, res) => {
  const response = req.body;
  const { id } = req.params;
  const data = await postNewResponse(response, id);
  res.json({
    success: true,
    message: `Response added to the database`,
    payload: data,
  });
});

router.get("/:id/responses", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const data = await getResponseByGraduateId(id);
  res.json({
    success: true,
    message: `Here are all responses for graduate ${id}`,
    payload: data,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const graduate = req.body;
  const data = await updateGraduate(graduate, id);
  res.json({
    success: true,
    message: `Graduate ${graduate.graduateName} has been updated`,
    payload: data,
  });
});

module.exports = router;
