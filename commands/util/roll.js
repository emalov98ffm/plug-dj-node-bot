var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var roll = {
	commands: ['roll'],
	cooldown: 60,
	lastUsed: 0,
	roleRequired: 'user',
	exec: function(bot, chat, data) {
		var user,
		if (data.params[0].toLowerCase() == 'id') {
	        user = auxapi.users.getUserByID(data.params[1]);
	    } else {
    	    var msg = data.params.join(' ').substr(1).split(' @');

    	    user = auxapi.users.getUserByUsername(msg[0]);
	    }
		var randomMax = chat.message.substr(cmd.length + 1);
					if ((isNaN(randomMax) == true) || (randomMax.length == 0)) {
						var randomMax = 60
					}
					var randomispis = Math.floor((Math.random() * randomMax) + 1)
					if(randomispis == 6)
					{
					bot.moveDJ(user.id, 1);
	    return bot.sendChat("@" + user + ", cestitam, upravo si osvojio prvo mjesto.");
	}
	else
					{
					var pos = Math.floor((Math.random() * bot.getWaitlist().length) + 1);
					bot.sendChat("@" + user + ", tvoj nasumicno odabran broj je " + randomispis + ". Nemas srece.");
					bot.moveDJ(user.id, pos);
					}
					
};

module.exports = roll;