var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var ask = {
	commands: ['ask','8ball'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: false,
	roleRequired: 'none',
	get8ball: function (chat) {
                    var c = Math.floor(Math.random() * lang.ask.answers.length);
                    return lang.ask.answers[c];
                },
	exec: function(bot, chat, data) {
	    bot.sendChat(utils.replaceString(lang.ask.answer, {user: chat.username, ask: this.get8ball()}), 30e3);
	}
};

module.exports = ask;
