var auxapi = require(process.cwd() + '/auxapi');
var lang = require(process.cwd() + '/lang.json');
var utils = require(process.cwd() + '/utils/utils');
var user = auxapi.users.getUserByID(chat.id);

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
	commands: ['slots', 'tokens'],
	cooldown: 30,
	lastUsed: 0,
	roleRequired: 'user',
	exec: function(bot, chat, data) {
		switch(data.cmd) {
			case 'slots':
			var msg = chat.message; 
                    var space = msg.indexOf(' ');
                    var user = chat.username; 
                    var updatedTokens;
                    var bet = parseInt(msg.substring(space + 1));
					
					//Fix bet if blank
                    if (bet == null || isNaN(bet)) {
                        bet = 1;
                    }
					 bet = Math.round(bet);   5   
                                   
                    var playerTokens = checkTokens(bet, user); 
					//Prevent invalid betting
                    if (bet > playerTokens[0]) {
                        if (playerTokens[0] === 0){
                            return bot.sendChat("/me [!slots]" + user.username + "pokusava iskoristiti" + bet +" TOKEn na ChemSlots, ali nema ni jedan! Kako neugodno.");
                        } 
			else if (playerTokens[0] === 1) {
                            return bot.sendChat("/me [!slots] @" + user.username + " pokusava iskoristiti " + bet + " TOKEn na ChemSlots, ali ima samo jedan TOKEn! Mislis da imas srece?"); 
                        }
						 else {
                            return bot.sendChat("/me [!slots] @" + user.username + " pokusava iskoristiti " + bet + " TOKEn na ChemSlots, ali ima samo " + playerTokens[0] + " TOKEna! Kako neugodno."); 
                        }
                    }
					else if (bet < 0) {
                        return bot.sendChat("/me [!slots] @" + user.username + " pokusava iskoristit " + bet + " TOKEn na ChemSlots... ali nije uspio."); 
                    }
					else if (bet === 0) { 
                        return bot.sendChat("/me [!slots] @" + user.username + " pokusava se kladiti u nista ... ne mozes igrati za dzabe! Bas si jeftin."); 
                    }
                    //Process valid bets
                    else {
                        var outcome = spinOutcome(bet);
                        updatedTokens = slotWinnings(outcome[3], user);
                    }
					//Display Slots
                    if (space === -1 || bet == 1) { 
                        //Start Slots
                        bot.sendChat("/me [!slots] @" + user.username + " ulaže 1 TOKEn na ChemSlots, i povlači ručicu ... i gleda kako se ChemSlots okrece.");
                        setTimeout(function() {bot.sendChat("/me  Napokon se zaustavlja na: " + outcome[0] + outcome[1] + outcome[2])}, 5000);
                    } 
                    else if (bet > 1) { 
                        //Start Slots
                        bot.sendChat("/me [!slots] @" + user.username + " ulaže " + bet + " TOKEna na ChemSlots, i povlači ručicu... ... i gleda kako se ChemSlots okrece.");
                        setTimeout(function() {bot.sendChat("/me Napokon se zaustavlja na: " + outcome[0] + outcome[1] + outcome[2])}, 5000);
                    } 
                    else {
                        return false; 
                    }
					//Display Outcome
                    if (outcome[3] == 0) {
                        if (updatedTokens === 1) {
                            setTimeout(function() {bot.sendChat("/me @" + user.username + ", nemaš sreće, luzeru! Nisi pobjedio. Imas 1 TOKEn. Čuo sam da je kockanje zarazno... želis pokušati ponovo?")}, 7000);   
                        } 
						else if (updatedTokens === 0) {
                            setTimeout(function() {bot.sendChat("/me @" + user.username + ", nemaš sreće, luzeru! Nisi pobjedio. Nemas vise TOKena... gotov si, ya bum!")}, 7000);
                        }
                        else {
                            setTimeout(function() {bot.sendChat("/me @" + user.username + ", nemaš sreće, luzeru! Nisi dobio nista. Imas " + updatedTokens + " TOKEna. Čuo sam da je kockanje zarazno... želis pokušati ponovo?")}, 7000);
                        }
                    }
					else if (outcome[3] == (bet * 7)) {
                        setTimeout(function() {
                        var id = auxapi.users.getUserByID;
                        bot.sendChat("/me @" + user.username + ", Pogodio si Jackpot: " + outcome[3] + " TOKEna! Sada imaš " + updatedTokens + " Nemoj ih sve odjednom potrošit.");
						 bot.moveDJ(id, 1, false);}, 7000); 
                    }
                    else {
                        setTimeout(function() {
                 var id = auxapi.users.getUserByID;
				 var pos = Math.floor((Math.random() * bot.getWaitlist().length) + 1);
                 bot.sendChat("/me @" + user.username + ", Pobjedio si! Dobio si " + outcome[3] + " TOKEna! Sada imaš " + updatedTokens + " TOKEna. Možda da pokušaš ponovo?");
                 bBot.userUtilities.moveUser(id, pos, false);}, 7000);
                    }
                };
            case 'tokens':
			    var tokens = validateTokens(user);
				bot.sendChat("/me [!tokens] @" + user + ", imas " + tokens + " TOKEna. Mozda zelis jos? Sretno na ruletu ili zatrazi od admina.");

		}
	}
};

module.exports = slots;