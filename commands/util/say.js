var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

    echoHistory1 = [],
    echoHistory2 = [],

var say = {
	commands: ['say'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
	var echohistory1, echohistory2;
	var echoMessage =  data.params + 1;
	 if (echoMessage.length == 0) {
                        bot.sendChat("@" + chat.username + ", tesko je ponoviti nista.");
                    } else if (echoMessage[0] == "!" || echoMessage.includes(" !")) {
                        bot.sendChat("@" + chat.username + ", pokusavas da ponovim komandu? Nista od toga, pokusaj nesto drugo.");
                    } else {
                echoHistory1.push(chat.username);
                echoHistory2.push(echoMessage);
                        bot.sendChat(echoMessage);
                    }
//
	}
};

module.exports = say;
