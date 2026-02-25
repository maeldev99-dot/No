const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Route de test
app.get("/", (req, res) => res.send("🐐 GoatBot is running!"));

// Démarrer le serveur Express
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Lancer le vrai bot
require("./main");
