const config = require("./config.json");
var encryptionKey = "";

var flipRequests = [];

console.log("Starting...");
console.log("Checking encrytion key...")

var encryptionCheck = require("./checkEncryption.js")();

encryptionKey = encryptionCheck;

const BloxClient = require("./bloxroll.js");
const Client = new BloxClient(config);

if(!config.prefix) {console.log("No prefix provided, defaulting to !"); config.prefix="!"}
if(config.token) Client.login(config.token); else console.log("No token provided for discord bot.")

