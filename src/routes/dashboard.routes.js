const express = require("express");

const {
  getDashboard,
} = require("../controllers/dashboard.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(protect);
/**
 * @swagger
 * /api/v1/dashboard:
 *   get:
 *     summary: Get dashboard analytics
 *     tags:
 *       - Dashboard
 *     responses:
 *       200:
 *         description: Dashboard fetched successfully
 */

router.get("/", getDashboard);

module.exports = router;