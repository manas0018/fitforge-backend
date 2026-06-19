const express = require("express");
const app = express();
app.use(express.json());

// Import Routes
const routes = require("./routes");

// API Routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send(`
    <h1>FitForge Backend API</h1>
    <p>Backend deployed successfully 🚀</p>
    <p>Features:</p>
    <ul>
      <li>Authentication</li>
      <li>Workout Tracking</li>
      <li>Body Metrics</li>
      <li>Goal Tracking</li>
      <li>BMI Calculator</li>
      <li>Calorie Calculator</li>
      <li>Dashboard Analytics</li>
    </ul>
  `);
});

module.exports = app;