const config = require("./config.json");
var encryptionKey = "";
const fs = require("fs");

console.log("Starting...");
console.log("Checking encrytion key...")

config.encryptionKey = require("./checkEncryption.js")();

const BloxClient = require("./bloxflip.js");
const client = new BloxClient(config);

if(!config.prefix) {console.log("No prefix provided, defaulting to !"); config.prefix="!"}
if(config.token) client.login(config.token); else console.log("No token provided for discord bot.")

var cmdFolder = fs.existsSync("./commands") ? fs.readdirSync("./commands/") : fs.readdirSync("./src/commands/");

for(var i in cmdFolder){
  if(!cmdFolder[i].endsWith(".js")) continue;
  var command = require(`./commands/${cmdFolder[i]}`);
  client.commands.set(command.name, command);
}
client.on("ready", () => {
  console.log("Bot is ready!");
})
client.on("message", (msg) => {
  if(msg.author.bot || !msg.startsWith(config.prefix)) return;
  var command = msg.replace(config.prefix, "").trim().split(/ +/)[0]
  if (!client.commands.has(command)) return;
  try{
  client.commands.get(command).execute(msg, client)
  } catch(err){
    var errorId = Math.floor(Math.random()*100000)
    msg.channel.send("An error occured while trying to execute that command. Please contact the developer of the bot for help. Error ID: " + errorId);
    if(!fs.existsSync("./errors")) fs.mkdirSync("./errors");
    console.log("Error occured, for more info check the file \"errors/"+errorId+".txt\"")
    fs.writeFileSync(errorId+".txt", err);
  }
})