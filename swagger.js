const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blog MySQL",
      version: "1.0.0",
      description: "API pour gérer un blog simple avec MySQL, Node.js et Express"
    },
    servers: [
      { url: "http://localhost:3000" }
    ]
  },
  apis: ["./routes/*.js"] // Indique où sont tes routes
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
