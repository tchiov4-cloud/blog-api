const { Sequelize } = require("sequelize");

// ⚠️ Remplace par tes infos MySQL
const sequelize = new Sequelize("blogDB", "blogUser", "Projet_INF222_2026!", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connecté ✅");
  } catch (error) {
    console.error("Erreur de connexion MySQL :", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
