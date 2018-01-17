var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var say = {
	commands: ['say'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
	var echohistory1, echohistory2;
	var echoMessage =  data.params + 1;
	 if (data.params.length == 0) {
                        bot.sendChat("@" + chat.username + ", tesko je ponoviti nista.");
                    } else if (data.params[0] == "!" || data.params.includes(" !")) {
                        bot.sendChat("@" + chat.username + ", pokusavas da ponovim komandu? Nista od toga, pokusaj nesto drugo.");
                    } else {
                        bot.sendChat(echoMessage);
                    }
//
	}
};

module.exports = say;
