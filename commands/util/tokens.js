var auxapi = require(process.cwd() + '/auxapi');
var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');

         function spinOutcome(bet) {
            var winnings;
            var outcome1 = spinSlots(); 
            var outcome2 = spinSlots();
            var outcome3 = spinSlots();   

            //Determine Winnings
            if (outcome1[0] == outcome2[0] && outcome1[0] == outcome3[0]) {
                winnings = Math.round(bet * outcome1[1]);
            }
            else if (outcome1[0] == outcome2[0] && outcome1[0] != outcome3[0]) {
                winnings = Math.round(bet * (.45 * outcome1[1]));
            }
            else if (outcome1[0] == outcome3[0] && outcome1[0] != outcome2[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome3[0] && outcome2[0] != outcome1[0]) {
                winnings = Math.round(bet * (.40 * outcome2[1]));
            }
            else{
                winnings = 0;  
            }
                        
            return [outcome1[0], outcome2[0], outcome3[0], winnings];                      
        }
        

     //Validate Tokens
        function validateTokens(user){
            var tokens; 
            
            //Check for existing user tokens
            if (localStorage.getItem(user) == null || localStorage.getItem(user) == "undefined") {
                 localStorage.setItem(user, "10");
                 tokens = localStorage.getItem(user);
            }
            else if (localStorage.getItem(user) !== null  && localStorage.getItem(user) !== "undefined") {
                 tokens = localStorage.getItem(user);
            }
            else {
                 tokens = localStorage.getItem(user);
            }
            
            return tokens;
        }
        
        function checkTokens(bet, user) {
             var tokensPreBet = validateTokens(user);
             var tokensPostBet;
             var validBet = true;

             //Adjust amount of tokens
             if (bet > tokensPreBet || bet < 0) {
                  validBet = false;
                  tokensPostBet = tokensPreBet;
             }
             else {
                  tokensPostBet = tokensPreBet - bet;
             }
             
             localStorage.setItem(user, tokensPostBet);
             return [tokensPreBet, tokensPostBet, validBet];
        }
        
        function slotWinnings(winnings, user) {
             var userTokens = parseInt(localStorage.getItem(user)) + winnings;
             if (isNaN(userTokens)) {
                 userTokens = winnings;
             }
             localStorage.setItem(user, userTokens);
             return userTokens;
        }

var tokens = {
	commands: ['tokens'],
	cooldown: 5,
	lastUsed: 0,
	roleRequired: 'user',
	exec: function(bot, chat, data) {
		var user = auxapi.users.getUserByID(chat.id);
                var userTokens = validateTokens(user.username);
				bot.sendChat(utils.replaceString(lang.tTokens.tokens, {user: chat.username, utokens: userTokens}), 30e3);

	}
};
module.exports = tokens;
