var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var emojilink = {
	commands: ['emoji'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
	    bot.sendChat(utils.replaceString(lang.fp.emojilink, {user: chat.username}), 30e3);
	}
};

module.exports = emojilink;
