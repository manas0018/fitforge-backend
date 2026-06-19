const express = require("express");

const router = express.Router();

const authRoutes = require("./auth.routes");
const workoutRoutes = require("./workout.routes");
const bodyMetricRoutes = require("./bodyMetric.routes");
const goalRoutes = require("./goal.routes");
const calculationRoutes = require("./calculation.routes");
const dashboardRoutes = require("./dashboard.routes");
const streakRoutes = require("./streak.routes");







router.use("/auth", authRoutes);
router.use("/workouts", workoutRoutes);
router.use("/metrics", bodyMetricRoutes);
router.use("/goals", goalRoutes);
router.use("/calculate", calculationRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/streak", streakRoutes);

module.exports = router;