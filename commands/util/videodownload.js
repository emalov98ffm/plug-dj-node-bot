var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var vdownload = {
	commands: ['vdownload'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
		            var media = bot.getMedia();
		            var linkToSong = "http://www.sfrom.net/https://www.youtube.com/watch?v=" + media.cid;
					bot.sendChat(utils.replaceString(lang.download.vdownload, {user: chat.username, ulink: linkToSong}), 30e3);
					}
					
};

module.exports = vdownload;
