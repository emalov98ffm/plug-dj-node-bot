var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var download = {
	commands: ['download'],
	cooldown: 5,
	lastUsed: 0,
	deleteMessage: true,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
		            var media = bot.getMedia();
		            var linkToSong = "https://break.tv/widget/mp3/?link=https://www.youtube.com/watch?v=" + media.cid;
					bot.sendChat(utils.replaceString(lang.download.mpdownload, {user: chat.username, ulink: linkToSong}), 30e3);
					}
					
};

module.exports = download;
