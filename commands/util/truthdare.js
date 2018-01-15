var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var truthdare = {
	commands: ['truth','dare'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	getTruth: function (chat) {
                    var c = Math.floor(Math.random() * lang.truthdare.truths.length);
                    return lang.truthdare.truths[c];
                },
	getDare: function(chat) {
                    var c = Math.floor(Math.random() * lang.truthdare.dares.length);
                    return lang.truthdare.dares[c];
                },
	exec: function(bot, chat, data) {
		switch(data.cmd) {
			case 'truth':
				bot.sendChat(utils.replaceString(lang.truthdare.truth, {user: chat.username, truth: this.getTruth()}), 30e3);
				break;
			
			case 'dare':
				bot.sendChat(utils.replaceString(lang.truthdare.dare, {user: chat.username, dare: this.getDare()}), 30e3);
				break;
		}
	}
};

module.exports = truthdare;
