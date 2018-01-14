const Plugged = require("plugged");

class OurSuperAwesomeBot extends Plugged {
    constructor(options={}) {
        super(options);
    }
    // here we add our new code
    greet(user) {
        this.sendChat(`Hi, @${user.username}`);
    }
}

module.exports = OurSuperAwesomeBot;
