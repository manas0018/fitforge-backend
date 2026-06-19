const Goal = require("../models/Goal.model");

const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create({
      user: req.user._id,
      goalType: req.body.goalType,
      targetWeight: req.body.targetWeight,
      deadline: req.body.deadline,
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({
      user: req.user._id,
    });

    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createGoal,
  getGoals,
};