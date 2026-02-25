// ===============================
// GOATBOT STARTER - RAILWAY SAFE
// ===============================

const express = require("express");
const app = express();
const path = require("path");

// ====== KEEP ALIVE SERVER ======
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🐐 GoatBot is running on Railway!");
});

app.listen(PORT, () => {
  console.log("🌍 Web server running on port " + PORT);
});

// ====== START GOATBOT ======
console.log("🚀 Starting GoatBot...");

try {
  require("./index.main"); // si ton vrai fichier principal est index.main.js
} catch (e) {
  try {
    require("./main"); // sinon si c'est main.js
  } catch (err) {
    console.error("❌ Error loading bot file:");
    console.error(err);
  }
}
