const Workout = require("../models/workout.model");
const BodyMetric = require("../models/BodyMetric.model");
const Goal = require("../models/Goal.model");

const getDashboard = async (req, res) => {
  try {
    const totalWorkouts = await Workout.countDocuments({
      user: req.user._id,
    });

    const latestWeight = await BodyMetric.findOne({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    const goal = await Goal.findOne({
      user: req.user._id,
    });

    let goalProgress = 0;

    if (goal && latestWeight) {
      goalProgress =
        (latestWeight.weight / goal.targetWeight) * 100;
    }

    res.status(200).json({
      success: true,
      data: {
        totalWorkouts,
        currentWeight: latestWeight
          ? latestWeight.weight
          : null,
        targetWeight: goal
          ? goal.targetWeight
          : null,
        goalProgress: goalProgress.toFixed(2),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};