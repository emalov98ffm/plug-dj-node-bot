var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');
var auxapi = require(process.cwd() + '/auxapi');

var cookie = {
	commands: ['cookie'],
	cooldown: 5,
	lastUsed: 0,
	roleRequired: 'none',
	getCookieList: function (chat) {
                    var c = Math.floor(Math.random() * lang.fortunes.cookielist.length);
                    return lang.fortunes.cookielist[c];
                },
	exec: function(bot, chat, data) {
		var user2;
	 var msg = data.params.join(' ').substr(1).split(' @');
	 user2 = auxapi.users.getUserByUsername(msg[1]);
	    bot.sendChat(utils.replaceString(lang.fortunes.cookie2, {user: chat.username, nameto: user2.username,  cookie: this.getCookieList()}), 30e3);
	}
};

module.exports = cookie;
