const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FitForge API",
      version: "1.0.0",
      description: "Fitness Tracking Backend API",
    },
    servers: [
      {
        url: "https://fitforge-backend-xaww.onrender.com",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;