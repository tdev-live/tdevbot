const db = require('../database/db');

const responder = (bot, chatter) => {
    const vueCounter = db.get('vue.counter');
    const reactCounter = db.get('react.counter');

    if (vueCounter > reactCounter) {
        bot.say('VueJS wins! SeemsGood');
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
