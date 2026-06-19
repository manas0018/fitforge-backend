const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exerciseName: {
      type: String,
      required: [true, "Exercise name is required"],
      trim: true,
    },
    sets: {
      type: Number,
      required: [true, "Sets is required"],
      min: [0, "Sets cannot be negative"],
    },
    reps: {
      type: Number,
      required: [true, "Reps is required"],
      min: [0, "Reps cannot be negative"],
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
      min: [0, "Weight cannot be negative"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

workoutSchema.index({ user: 1, date: -1 });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;