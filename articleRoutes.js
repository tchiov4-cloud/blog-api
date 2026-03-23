const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleController");

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: Gestion des articles
 */

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Créer un article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre: { type: string }
 *               contenu: { type: string }
 *               auteur: { type: string }
 *               categorie: { type: string }
 *               tags:
 *                 type: array
 *                 items: { type: string }
 *     responses:
 *       201:
 *         description: Article créé
 */
router.post("/articles", controller.createArticle);

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Liste des articles
 */
router.get("/articles", controller.getArticles);

/**
 * @swagger
 * /api/articles/search:
 *   get:
 *     summary: Rechercher des articles
 *     tags: [Articles]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema: { type: string }
 *         required: true
 *         description: Texte à rechercher
 *     responses:
 *       200:
 *         description: Articles correspondant à la recherche
 */
router.get("/articles/search", controller.searchArticles);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Récupérer un article par ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Article trouvé
 */
router.get("/articles/:id", controller.getArticleById);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Modifier un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre: { type: string }
 *               contenu: { type: string }
 *               auteur: { type: string }
 *               categorie: { type: string }
 *               tags:
 *                 type: array
 *                 items: { type: string }
 *     responses:
 *       200:
 *         description: Article mis à jour
 */
router.put("/articles/:id", controller.updateArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Article supprimé
 */
router.delete("/articles/:id", controller.deleteArticle);

module.exports = router;
