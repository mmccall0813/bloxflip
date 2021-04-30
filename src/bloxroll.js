const {Client, Collection} = require("discord.js")

module.exports = class extends Client {
	constructor(config) {
    super()
    this.commands = new Collection();
    this.config = config;
    this.flipRequests = new Array();
  }
}