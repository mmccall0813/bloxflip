const {MessageEmbed} = require("discord.js");
const aes256 = require("aes256");
const fs = require("fs");

module.exports = {
  "name":"setcookie",
  async execute(message, client, content){
    // validate token first
    var noblox = require("noblox.js");
    if(message.guild) message.delete();
    message.channel.send("Validating cookie...")
    try{
     await noblox.setCookie(content.split(" ")[0])
    } catch(err){
      return message.channel.send("That cookie is invalid! Make sure that you are sending your `.ROBLOSECURITY` token. If you don't know where to get your ROBLOSECURITY cookie then look it up.");
    }
    if(message.guild)/* This is bad!! */{return message.author.send("Hey! You just sent your `.ROBLOSECURITY` cookie in a server! This is not a good thing! I've deleted the message for you, but you should probably log out and log back in, and retry the command in this DM.")}
   var cookie = content.split(" ")[0];
    var embed = new MessageEmbed();
    var data = await noblox.getCurrentUser().UserName
    embed.setTitle("Cookie").setDescription("Cookie added! Current user set to "+ data.UserName);
    const userData = {
      cookie: cookie,
      robux: data.RobuxBalance,
      thumbNail: data.ThumbnailURL,
      username: data.UserName
    }
    fs.writeFileSync(".data/"+message.author.id.toString()+".user", aes256.encrypt(client.encryptionKey, userData));
    message.channel.send(embed);
  }
}