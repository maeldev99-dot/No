// ===============================
// GOATBOT RAILWAY STABLE STARTER
// ===============================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Keep Railway happy
app.get("/", (req, res) => {
  res.send("🐐 GoatBot is running!");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ===============================
// LOAD BOT
// ===============================
const fs = require("fs");
const path = require("path");

// Detect main file
let mainFile = null;
if (fs.existsSync(path.join(__dirname, "main.js"))) mainFile = "./main";
else if (fs.existsSync(path.join(__dirname, "index.main.js"))) mainFile = "./index.main";
else console.error("❌ Aucun fichier principal trouvé (main.js ou index.main.js)");

if (mainFile) {
  try {
    require(mainFile);
    console.log("🚀 GoatBot démarré !");
  } catch (err) {
    console.error("❌ Erreur lors du lancement du bot :");
    console.error(err);
  }
}
