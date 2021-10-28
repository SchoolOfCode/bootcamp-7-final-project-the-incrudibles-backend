const express = require("express");
const router = express.Router();

const {
  getAllPartners,
  getPartnerById,
  deletePartnerById,
  createPartner,
  updatePartner,
} = require("../models/partners");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let data = await getPartnerById(id);
  res.json({
    success: true,
    message: "Here is the partner with id " + id,
    payload: data,
  });
});

router.get("/", async (req, res) => {
  const data = await getAllPartners();
  res.json({
    success: true,
    message: "Here are all the partners",
    payload: data,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deletePartnerById(id);
  res.json({
    success: true,
    message: `Partner ${id} has been deleted form the database`,
    payload: data,
  });
});

router.post("/", async (req, res) => {
  const partner = req.body;
  const data = await createPartner(partner);
  res.json({
    success: true,
    message: `${partner.org_name} has been added to the database`,
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
