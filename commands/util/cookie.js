var auxapi = require(process.cwd() + '/auxapi');
var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

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
	    var user1, user2;
	    
	    if (!data.params.length)
	        return bot.sendChat(utils.replaceString(lang.general.userNotFound, {user: chat.username}));
	       
	    if (data.params[0].toLowerCase() == 'id') {
	        user1 = auxapi.users.getUserByID(data.params[1]);
	        user2 = auxapi.users.getUserByID(data.params[2]);
	    } else {
    	    var msg = data.params.join(' ').substr(1).split(' @');

    	    user1 = auxapi.users.getUserByUsername(msg[0]);
    	    user2 = auxapi.users.getUserByUsername(msg[1]);
	    }

	    if (!user1 || !user2)
	        return bot.sendChat(utils.replaceString(lang.general.ghost, {user: chat.username}), 30e3);
        
        if (user1.id == user2.id)
            return bot.sendChat(utils.replaceString(lang.swap.sameUser, {user: chat.username}), 30e3);

        bot.sendChat(utils.replaceString(lang.fortunes.cookie2,{user1: user1.username, user2: user2.username,cookie: this.getCookieList()}));
	}
};

module.exports = cookie;
