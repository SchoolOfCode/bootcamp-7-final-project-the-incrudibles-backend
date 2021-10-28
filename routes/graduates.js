const express = require("express");
const router = express.Router();

const {
  getAllGraduates,
  getGraduateByUuid,
  deleteGraduateByUuid,
  postNewGraduate,
  updateGraduate,
  patchGraduate,
} = require("../models/graduates");

const {
  getResponsesByGraduateUuid,
  postNewResponse,
} = require("../models/responses");

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
    message: `Graduate ${graduate.graduate_name} has been added to the database`,
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
  const data = await getResponsesByGraduateUuid(id);
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
    message: `Graduate ${graduate.graduate_name} has been updated`,
    payload: data,
  });
});

// Patch graduate by id
router.patch("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  let payload;

  // make an array of acceptable column names
  const acceptableColumnHeaders = [
    "graduate_name",
    "graduate_email",
    "cohort",
    "graduation_date",
    "first_job_date",
  ];

  // check that all col_names are acceptable names
  for (const col_name in body) {
    if (!acceptableColumnHeaders.includes(col_name)) {
      res.json({
        success: false,
        message: `You have supplied an invalid column header`,
      });
      return;
      // if all col_names are accetable - then proceed (i.e., call the update function for each property given in the body)
    } else {
      const value = body[col_name];
      payload = await patchGraduate(col_name, value, id);
    }
  }

  res.json({
    success: true,
    message: `graduate ${id} updated`,
    payload: payload,
  });
});

module.exports = router;
