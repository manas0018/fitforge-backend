const BodyMetric = require("../models/BodyMetric.model");

const addWeight = async (req, res) => {
  try {
    const metric = await BodyMetric.create({
      user: req.user._id,
      weight: req.body.weight,
    });

    res.status(201).json(metric);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getWeightHistory = async (req, res) => {
  try {
    const metrics = await BodyMetric.find({
      user: req.user._id,
    }).sort({ date: 1 });

    res.status(200).json(metrics);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addWeight,
  getWeightHistory,
};