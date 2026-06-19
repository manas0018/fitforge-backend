const express = require("express");
const app = express();
app.use(express.json());

// Import Routes
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

// API Routes
app.use("/api/v1", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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