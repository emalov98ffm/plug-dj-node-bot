var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var anime = {
	commands: ['anime'],
	cooldown: 5,
	lastUsed: 0,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
	    bot.sendChat(utils.replaceString(lang.fp.anime, {user: chat.username}), 30e3);
	}
};

module.exports = anime;
