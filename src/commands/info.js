const {MessageEmbed} = require("discord.js");

module.exports = {
  name:"info",
  execute(message){
    var embed = new MessageEmbed();
    embed.setTitle("Info")
    .setDescription("BloxFlip is an open source dicord bot made by mmccall0813 on github. It uses AES-256 to encrypt `.ROBLOSECURITY` tokens. When you do a coinflip, it uses a random number to determine the winner. The bot uses `.ROBLOSECURITY` tokens to pay the winner ROBUX by creating a gamepass on the winner account and buying it on the loser account.")
    .addField("GitHub", "https://github.com/mmccall0813/bloxflip");
    message.channel.send(embed);
  }
}