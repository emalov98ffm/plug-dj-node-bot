var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var movie = {
	commands: ['movie'],
	cooldown: 5,
	lastUsed: 0,
	roleRequired: 'user',
	exec: function(bot, chat, data) {
	    bot.sendChat(utils.replaceString(lang.fp.movie, {user: chat.username}), 30e3);
	}
};

module.exports = movie;