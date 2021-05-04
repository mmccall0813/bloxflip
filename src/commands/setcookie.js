const {MessageEmbed} = require("discord.js");

module.exports = {
  "name":"setcookie",
  execute(message, client, content){
    // validate token first
    var noblox = require("noblox.js");
    try{
      noblox.setCookie(content.split(" ")[0])
    } catch(err){
      return message.channel.send("That cookie is invalid!");
    }

    if(message.guild) // This is bad!! 
      {
        message.delete();
        message.author.send("")
      }
  }
}