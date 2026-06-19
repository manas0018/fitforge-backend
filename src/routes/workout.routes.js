const express = require("express");

const {
  createWorkout,
  getUserWorkouts,
  deleteWorkout,
} = require("../controllers/workout.controller");



const router = express.Router();

// Every route below requires JWT authentication
const { protect } = require("../middlewares/auth.middleware");

router.use(protect);
/**
 * @swagger
 * /api/v1/workouts:
 *   post:
 *     summary: Create a workout
 *     tags:
 *       - Workouts
 *     responses:
 *       201:
 *         description: Workout created successfully
 *   get:
 *     summary: Get all workouts
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: Workouts fetched successfully
 */

router.route("/").post(createWorkout).get(getUserWorkouts);
/**
 * @swagger
 * /api/v1/workouts/{id}:
 *   delete:
 *     summary: Delete a workout
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workout deleted successfully
 */

router.route("/:id").delete(deleteWorkout);

module.exports = router;