# 📝 API Blog Backend (Node.js + MySQL)

## 📌 Description

Cette API REST permet de gérer un blog simple.
Elle offre toutes les fonctionnalités nécessaires pour manipuler des articles : création, consultation, modification, suppression et recherche.

Ce projet a été réalisé dans le cadre de l’UE **INF222 – Développement Backend**.

---

## 🛠️ Technologies utilisées

* Node.js
* Express.js
* MySQL
* Sequelize (ORM)
* Swagger (documentation API)

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://tchiov4-cloud/blog-api.git
cd blog-api
```

---

### 2. Installer les dépendances

```bash
npm install
```

---

### 3. Configuration de la base de données

Dans MySQL :

```sql
CREATE DATABASE blogDB;

CREATE USER 'blogUser'@'localhost' IDENTIFIED BY 'Projet_INF222_2026!';
GRANT ALL PRIVILEGES ON blogDB.* TO 'blogUser'@'localhost';
FLUSH PRIVILEGES;
```

---

### 4. Configuration du projet

Modifier le fichier `config/db.js` si nécessaire :

```js
const sequelize = new Sequelize("blogDB", "blogUser", "Projet_INF222_2026!", {
  host: "localhost",
  dialect: "mysql"
});
```

---

## 🚀 Lancement du projet

```bash
npx nodemon server.js
```

Serveur accessible sur :

```
http://localhost:3000
```

---

## 📖 Documentation API

Swagger UI disponible ici :

```
http://localhost:3000/api-docs
```

Permet de tester tous les endpoints directement depuis le navigateur.

---

## 📌 Endpoints

### 🔹 Créer un article

* **POST** `/api/articles`

```json
{
  "titre": "Mon article",
  "contenu": "Contenu ici",
  "auteur": "Valdo",
  "categorie": "Tech",
  "tags": ["node", "api"]
}
```

---

### 🔹 Récupérer tous les articles

* **GET** `/api/articles`

---

### 🔹 Récupérer un article par ID

* **GET** `/api/articles/{id}`

---

### 🔹 Modifier un article

* **PUT** `/api/articles/{id}`

---

### 🔹 Supprimer un article

* **DELETE** `/api/articles/{id}`

---

### 🔹 Rechercher un article

* **GET** `/api/articles/search?query=texte`

---

### 🔹 Filtrer les articles

* **GET** `/api/articles?categorie=Tech&auteur=Valdo&date=2026-03-23`

---

## ✅ Bonnes pratiques appliquées

* ✔ Validation des entrées utilisateur (champs obligatoires)
* ✔ Utilisation des codes HTTP :

  * 200 : OK
  * 201 : Création réussie
  * 400 : Requête invalide
  * 404 : Ressource non trouvée
  * 500 : Erreur serveur
* ✔ Architecture MVC :

  * Models
  * Controllers
  * Routes
* ✔ Utilisation d’un ORM (Sequelize)
* ✔ Documentation avec Swagger

---

## 🧪 Tests

Les tests peuvent être effectués avec :

* Swagger UI
* Postman

---

## 📦 Déploiement 

L’application peut être déployée sur :

* Render
* Railway

---

## 👨‍💻 Auteur
Nom : TCHIO TCHOUALA VALDO
Filière : Informatique
Niveau: Licence 2
UE : INF222 – Développement Backend
