const {MessageEmbed} = require("discord.js");

module.exports = {
  name:"help",
  execute(message){
    var embed = new MessageEmbed();
    var args = message.content.split(" ").slice(1);
    embed.setTitle("Help")
    .setColor("#34deeb")
    switch(args[0]){
      case "0":
      default:
      embed.addField("`help`", "shows you this page")
      .addField("`setcookie`", "sets your roblox cookie")
      break;
    }
  }
}