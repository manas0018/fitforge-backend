const Workout = require("../models/Workout.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// @desc    Create a new workout entry
// @route   POST /api/v1/workouts
// @access  Private
const createWorkout = asyncHandler(async (req, res) => {
  const { exerciseName, sets, reps, weight, date } = req.body;

  if (
    !exerciseName ||
    sets === undefined ||
    reps === undefined ||
    weight === undefined
  ) {
    throw new ApiError(
      400,
      "exerciseName, sets, reps, and weight are required"
    );
  }

  const workout = await Workout.create({
    user: req.user._id,
    exerciseName,
    sets,
    reps,
    weight,
    date,
  });

  res
    .status(201)
    .json(new ApiResponse(201, workout, "Workout created successfully"));
});

// @desc    Get all workouts belonging to logged-in user
// @route   GET /api/v1/workouts
// @access  Private
const getUserWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({
    user: req.user._id,
  }).sort({ date: -1 });

  res
    .status(200)
    .json(new ApiResponse(200, workouts, "Workouts fetched successfully"));
});

// @desc    Delete workout
// @route   DELETE /api/v1/workouts/:id
// @access  Private
const deleteWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    throw new ApiError(404, "Workout not found");
  }

  if (workout.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized to delete this workout");
  }

  await workout.deleteOne();

  res.status(200).json(
    new ApiResponse(
      200,
      { id: req.params.id },
      "Workout deleted successfully"
    )
  );
});

module.exports = {
  createWorkout,
  getUserWorkouts,
  deleteWorkout,
};