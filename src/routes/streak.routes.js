const express = require("express");

const {
  getWorkoutStreak,
} = require("../controllers/streak.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);

router.get("/", getWorkoutStreak);

module.exports = router;