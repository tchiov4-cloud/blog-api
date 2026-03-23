const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB, sequelize } = require("./config/db");
const routes = require("./routes/articleRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const app = express();

// Connexion DB
connectDB();
const Article = require("./models/Article");




// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Synchroniser tables
const article = require("./models/Article");
sequelize.sync({ alter: true }).then(() => console.log("Tables synchronisées ✅"));

// Lancer serveur
app.listen(3000, () => console.log("Serveur lancé sur http://localhost:3000"));

