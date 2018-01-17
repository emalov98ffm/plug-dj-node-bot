var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var say = {
	commands: ['say'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'residentdj',
	exec: function(bot, chat, data) {
	var echoMessage =  data.params[0];
	 if (data.params.length == 0) {
                        return bot.sendChat("@" + chat.username + ", tesko je ponoviti nista.");
                    } else if (echoMessage[0] == "!" || echoMessage.includes(" !")) {
                       return bot.sendChat("@" + chat.username + ", pokusavas da ponovim komandu? Nista od toga, pokusaj nesto drugo.");
                    } else {
                        bot.sendChat(echoMessage);
                    }
//
	}
};

module.exports = say;
