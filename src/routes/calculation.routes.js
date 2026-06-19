const express = require("express");

const {
  calculateBMI,
  calculateCalories,
} = require("../controllers/calculation.controller");

const router = express.Router();
/**
 * @swagger
 * /api/v1/calculations/bmi:
 *   post:
 *     summary: Calculate BMI
 *     tags:
 *       - Calculations
 *     responses:
 *       200:
 *         description: BMI calculated
 */

router.post("/bmi", calculateBMI);
/**
 * @swagger
 * /api/v1/calculations/calories:
 *   post:
 *     summary: Calculate maintenance calories
 *     tags:
 *       - Calculations
 *     responses:
 *       200:
 *         description: Calories calculated
 */
router.post("/calories", calculateCalories);

module.exports = router;