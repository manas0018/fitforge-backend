const Workout = require("../models/workout.model");

const getWorkoutStreak = async (req, res) => {
  try {
    const workouts = await Workout.find({
      user: req.user._id,
    }).sort({ date: -1 });

    if (workouts.length === 0) {
      return res.json({
        currentStreak: 0,
      });
    }

    let streak = 1;

    for (let i = 1; i < workouts.length; i++) {
      const current = new Date(workouts[i - 1].date);
      const previous = new Date(workouts[i].date);

      const diff =
        Math.floor(
          (current - previous) /
            (1000 * 60 * 60 * 24)
        );

      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }

    res.json({
      currentStreak: streak,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getWorkoutStreak,
};