const db = require('../database/db');

const responder = (bot, chatter) => {
    const vueCounter = db.get('vue.counter').value();
    const reactCounter = db.get('react.counter').value();

    if (vueCounter > reactCounter) {
        bot.say('VueJS wins! SeemsGood');
    } else if (vueCounter === reactCounter) {
        bot.say('Nobody wins! BloodTrail');
    } else {
        bot.say('ReactJS wins! NotLikeThis');
    }
};

module.exports.default = {
    name: 'versus',
    alias: 'vs',
    enabled: true,
    responder
};
