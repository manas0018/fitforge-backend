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

router.route("/").post(createWorkout).get(getUserWorkouts);

router.route("/:id").delete(deleteWorkout);

module.exports = router;