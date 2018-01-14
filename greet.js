var fs = require('fs');
var Plugged = require("./plugged");
var utils = require('./utils/utils');

class OurSuperAwesomeBot extends Plugged {
    constructor(options={}) {
        super(options);
    }
    // here we add our new code
    greet(user) {
        bot.sendChat(`Hi, @${user.username}`);
    }
}

module.exports = OurSuperAwesomeBot;
