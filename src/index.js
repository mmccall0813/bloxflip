const {Client, MessageEmbed} = require("discord.js");
const {token, prefix, mode} = require("./config.json");
const fs = require("fs");
var encryptionKey = "";

console.log("Starting...");
console.log("Checking encrytion key...")

var encryptionCheck = require("./checkEncryption.js")();

encryptionKey = encryptionCheck;
