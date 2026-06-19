const express = require("express");

const {
  createGoal,
  getGoals,
} = require("../controllers/goal.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);
/**
 * @swagger
 * /api/v1/goals:
 *   post:
 *     summary: Create a goal
 *     tags:
 *       - Goals
 *     responses:
 *       201:
 *         description: Goal created
 */

router.post("/", createGoal);
/**
 * @swagger
 * /api/v1/goals:
 *   get:
 *     summary: Get user goals
 *     tags:
 *       - Goals
 *     responses:
 *       200:
 *         description: Goals fetched
 */
router.get("/", getGoals);

module.exports = router;
