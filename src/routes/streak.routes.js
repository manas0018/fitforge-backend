const express = require("express");

const {
  getWorkoutStreak,
} = require("../controllers/streak.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);
/**
 * @swagger
 * /api/v1/streak:
 *   get:
 *     summary: Get current workout streak
 *     tags:
 *       - Streak
 *     responses:
 *       200:
 *         description: Streak fetched successfully
 */

router.get("/", getWorkoutStreak);

module.exports = router;