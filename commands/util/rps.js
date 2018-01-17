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
	var chatPrefix = "/me ";
    var userChoice = data.params[0];
	if(botChoice == userChoice){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"! It's a draw!");
                } else if(botChoice == choices[0] && userChoice == choices[1]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[0] && userChoice == choices[2]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[0] && userChoice == choices[3]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[0] && userChoice == choices[4]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[1] && userChoice == choices[0]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[1] && userChoice == choices[2]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[1] && userChoice == choices[3]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[1] && userChoice == choices[4]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[2] && userChoice == choices[0]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[2] && userChoice == choices[1]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[2] && userChoice == choices[3]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[2] && userChoice == choices[4]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[3] && userChoice == choices[0]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[3] && userChoice == choices[1]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[3] && userChoice == choices[2]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[3] && userChoice == choices[4]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[4] && userChoice == choices[0]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[4] && userChoice == choices[1]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[4] && userChoice == choices[2]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else if(botChoice == choices[4] && userChoice == choices[3]){
                    bot.sendChat(chatPrefix+"chose "+botChoice+"!");
                } else {
                    bot.sendChat(chatPrefix+"Please select between Rock, Paper, Scissors, Lizard, or Spock.");
                }

				
		}
		
		
		
	}
};

module.exports = rps;
