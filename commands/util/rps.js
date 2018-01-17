var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

var rps = {
	commands: ['rps'],
	cooldown: 10,
	lastUsed: 0,
	deleteMessage: false,
	roleRequired: 'none',
	exec: function(bot, chat, data) {
	if(data.params[0]){
       bot.sendChat("/me Da bi igrao rock paper scissors koristi !rps {izbor}");
	} else {
	var choices = ["rock", "paper", "scissors", "lizard", "spock"];
    var botChoice = choices[Math.floor(Math.random()*choices.length)];
    var userChoice = data.params[1] + 1;
	if(botChoice == userChoice){
                   return  bot.sendChat(utils.replaceString(lang.rps.draw, {choice: botChoice, user: chat.username}), 30e3);
                } else if (botChoice == "rock" && userChoice == "paper") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);

                            } else if (botChoice == "rock" && userChoice == "scissors") {
                               return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "rock" && userChoice == "lizard") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "rock" && userChoice == "spock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "paper" && userChoice == "rock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "paper" && userChoice == "scissors") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "paper" && userChoice == "lizard") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "paper" && userChoice == "spock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "scissors" && userChoice == "rock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "scissors" && userChoice == "paper") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "scissors" && userChoice == "lizard") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "scissors" && userChoice == "spock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "lizard" && userChoice == "rock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "lizard" && userChoice == "paper") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "lizard" && userChoice == "scissors") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "lizard" && userChoice == "spock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "spock" && userChoice == "rock") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "spock" && userChoice == "paper") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else if (botChoice == "spock" && userChoice == "scissors") {
                                return  bot.sendChat(utils.replaceString(lang.rps.lose, {choice: botChoice, user: chat.username}), 30e3);
                                bot.skipDJ();
                            
                            } else if (botChoice == "spock" && userChoice == "lizard") {
                                return  bot.sendChat(utils.replaceString(lang.rps.win, {choice: botChoice, user: chat.username}), 30e3);
                            
                            } else {
                                return  bot.sendChat(utils.replaceString(lang.rps.error, {user: chat.username}), 30e3);
                            }

				
		}
		
		
		
	}
};

module.exports = rps;
