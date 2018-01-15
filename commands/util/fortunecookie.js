var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var fortunecookie = {
	commands: ['fortunecookie'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	getFcookie: function (chat) {
                    var c = Math.floor(Math.random() * lang.fortunes.fortunecookies.length);
                    return lang.fortunes.fortunecookies[c];
                },
	exec: function(bot, chat, data) {
	    bot.sendChat(utils.replaceString(lang.fortunes.cookie, {user: chat.username, fortune: this.getFcookie()}), 30e3);
	}
};

module.exports = fortunecookie;
