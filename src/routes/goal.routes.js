const express = require("express");

const {
  createGoal,
  getGoals,
} = require("../controllers/goal.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);

router.post("/", createGoal);
router.get("/", getGoals);

module.exports = router;
