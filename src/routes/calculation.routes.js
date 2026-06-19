const express = require("express");

const {
  calculateBMI,
  calculateCalories,
} = require("../controllers/calculation.controller");

const router = express.Router();

router.post("/bmi", calculateBMI);
router.post("/calories", calculateCalories);

module.exports = router;