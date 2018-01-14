var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var hearts = {
	commands: ['heart'],
	cooldown: 5,
	lastUsed: 0,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
	var love = ""
    for (var i = 0; i < (Math.floor((Math.random() * 10) + 1)); i++) {
						var love = love + ":heart: "
					}
	    bot.sendChat("/me @" + chat.username + " : " + love);
	}
};

module.exports = hearts;
