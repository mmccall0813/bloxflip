const {MessageEmbed} = require("discord.js");

module.exports = {
  name:"help",
  execute(message){
    var embed = new MessageEmbed();
    var args = message.content.split(" ").slice(1);
    embed.setTitle("Help")
    .setColor("#34deeb")
    .addField("`help`", "shows you this page")
    .addField("`setcookie`", "sets your roblox cookie. usage: setcookie `insert cookie here`")
    .addField("`removecookie`", "deletes your roblox cookie from the database")
    .addField("`coinflip`", "start a coinflip with another user. usage: coinflip @user 100")
    .addField("`info`", "gives you some info about the bot");
    message.channel.send(embed)
  }
}