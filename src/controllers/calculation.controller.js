const calculateBMI = (req, res) => {
  try {
    const { weight, height } = req.body;

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    let status = "";

    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 25) {
      status = "Normal";
    } else if (bmi < 30) {
      status = "Overweight";
    } else {
      status = "Obese";
    }

    res.status(200).json({
      bmi: bmi.toFixed(2),
      status,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const calculateCalories = (req, res) => {
  try {
    const { age, weight, height, gender, activityLevel } = req.body;

    if (!age || !weight || !height || !gender || !activityLevel) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let bmr;

    if (gender.toLowerCase() === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMap = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryactive: 1.9,
    };

    const tdee = bmr * activityMap[activityLevel];

    res.status(200).json({
      success: true,
      bmr: Math.round(bmr),
      maintenanceCalories: Math.round(tdee),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { calculateBMI, calculateCalories  };