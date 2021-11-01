const express = require("express");
const router = express.Router();

const {
  getAllTechnologies,
  getTechnologyById,
  deleteTechnologyById,
  postNewTechnology,
} = require("../models/technologies");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let data = await getTechnologyById(id);
  res.json({
    success: true,
    message: "Here is the tech with id " + id,
    payload: data,
  });
});

router.get("/", async (req, res) => {
  const data = await getAllTechnologies();
  res.json({
    success: true,
    message: "Here are all the technologies",
    payload: data,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteTechnologyById(id);
  res.json({
    success: true,
    message: `Tech ${id} has been deleted form the database`,
    payload: data,
  });
});

router.post("/", async (req, res) => {
  const tech = req.body;
  const data = await postNewTechnology(tech);
  res.json({
    success: true,
    message: `${tech.name} has been added to the database`,
    payload: data,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const partner = req.body;
  const data = await updatePartner(partner, id);
  res.json({
    success: true,
    message: `${partner.org_name} has been updated`,
    payload: data,
  });
});

module.exports = router;
