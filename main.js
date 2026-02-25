// ===============================
// GOATBOT MAIN.JS
// ===============================

const fs = require("fs");
const login = require("fca-unofficial");
const path = require("path");

// Charger config
const configPath = path.join(__dirname, "config.json");
if (!fs.existsSync(configPath)) {
  console.error("❌ config.json introuvable !");
  process.exit(1);
}
const config = require(configPath);

// Charger appstate
let appState = null;
if (config.loginType === "appstate") {
  const appStatePath = path.join(__dirname, config.appStatePath || "appstate.json");
  if (!fs.existsSync(appStatePath)) {
    console.error(`❌ appstate.json introuvable à ${appStatePath}`);
    process.exit(1);
  }
  appState = JSON.parse(fs.readFileSync(appStatePath, "utf8"));
}

// Lancer le bot avec fca-unofficial
login(
  {
    appState: appState,
    listenEvents: true,
    logLevel: "error"
  },
  (err, api) => {
    if (err) return console.error("❌ Erreur login :", err);

    console.log(`🚀 GoatBot connecté en tant que ${api.getCurrentUserID() || "Unknown"}`);

    // Exemple : répondre à un message
    api.listenMqtt((errListen) => {
      if (errListen) console.error("❌ Erreur mqtt :", errListen);
    });
  }
);
