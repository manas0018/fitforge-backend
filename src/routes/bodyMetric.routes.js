const express = require("express");

const {
  addWeight,
  getWeightHistory,
} = require("../controllers/bodyMetric.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);
/**
 * @swagger
 * /api/v1/body-metrics:
 *   post:
 *     summary: Add body metric
 *     tags:
 *       - Body Metrics
 *     responses:
 *       201:
 *         description: Body metric added
 */

router.post("/", addWeight);
/**
 * @swagger
 * /api/v1/body-metrics:
 *   get:
 *     summary: Get body metric history
 *     tags:
 *       - Body Metrics
 *     responses:
 *       200:
 *         description: Metrics fetched
 */
router.get("/", getWeightHistory);

module.exports = router;