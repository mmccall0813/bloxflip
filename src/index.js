const {token, prefix} = require("./config.json");
var encryptionKey = "";

var flipRequests = [];

console.log("Starting...");
console.log("Checking encrytion key...")

var encryptionCheck = require("./checkEncryption.js")();

encryptionKey = encryptionCheck;

const Client = require("./bloxroll.js")

if(token) Client.login(token); else console.log("No token provided for discord bot.")

