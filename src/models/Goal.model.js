const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goalType: {
      type: String,
      enum: ["Weight Gain", "Weight Loss"],
      required: true,
    },
    targetWeight: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);