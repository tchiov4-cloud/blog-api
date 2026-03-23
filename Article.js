const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Article = sequelize.define("Article", {
  titre: { type: DataTypes.STRING, allowNull: false },
  contenu: { type: DataTypes.TEXT, allowNull: false },
  auteur: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  categorie: { type: DataTypes.STRING },
  tags: { type: DataTypes.JSON, defaultValue: [] }
});

module.exports = Article;
