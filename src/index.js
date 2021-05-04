const config = require("./config.json");
var encryptionKey = "";
const fs = require("fs");

console.log("Starting...");
console.log("Checking encrytion key...")

var encryptionCheck = require("./checkEncryption.js")();

encryptionKey = encryptionCheck;

config.encryptionKey = encryptionKey;

const BloxClient = require("./bloxflip.js");
const Client = new BloxClient(config);

if(!config.prefix) {console.log("No prefix provided, defaulting to !"); config.prefix="!"}
if(config.token) Client.login(config.token); else console.log("No token provided for discord bot.")

var cmdFolder = fs.existsSync("./commands") ? fs.readdirSync("./commands/") : fs.readdirSync("./src/commands/");

for(var i in cmdFolder){
  if(cmdFolder[i]){
    
  }
}