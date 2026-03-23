const Article = require("../models/Article");
const { Op } = require("sequelize");

// CREATE
exports.createArticle = async (req, res) => {
  try {
    const { titre, contenu, auteur } = req.body;
    if (!titre || !contenu || !auteur) {
      return res.status(400).json({ message: "Titre, contenu et auteur obligatoires" });
    }

    const article = await Article.create(req.body);
    res.status(201).json({ message: "Article créé", data: article });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ALL
exports.getArticles = async (req, res) => {
  try {
    const { categorie, auteur, date } = req.query;
    let filter = {};
    if (categorie) filter.categorie = categorie;
    if (auteur) filter.auteur = auteur;
    if (date) filter.date = date;

    const articles = await Article.findAll({ where: filter });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ONE
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ message: "Article non trouvé" });
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ message: "Article non trouvé" });

    await article.update(req.body);
    res.status(200).json({ message: "Article mis à jour", data: article });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ message: "Article non trouvé" });

    await article.destroy();
    res.status(200).json({ message: "Article supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// SEARCH
exports.searchArticles = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).json({ message: "Paramètre 'query' requis" });

    const articles = await Article.findAll({
      where: {
        [Op.or]: [
          { titre: { [Op.like]: `%${query}%` } },
          { contenu: { [Op.like]: `%${query}%` } }
        ]
      }
    });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
