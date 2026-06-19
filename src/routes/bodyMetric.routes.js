const express = require("express");

const {
  addWeight,
  getWeightHistory,
} = require("../controllers/bodyMetric.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);

router.post("/", addWeight);
router.get("/", getWeightHistory);

module.exports = router;