const db = require('../database/db');

const responder = (bot, chatter, argument) => {
    if (argument === 'blame') {
        const fanboys = db.get('vue.fanboys')
                          .filter(fanboy => {
                             return fanboy.obtrusiveness > 5;
                          })
                          .sortBy('obtrusiveness')
                          .take(20)
                          .value()
                          .map(({username}) => username);

        if (fanboys.length === 0) {
            bot.say('VueJS has no fanboys! NotLikeThis');
        } else {
            bot.say('These guys are VueJS Fanboys! SeemsGood ' + fanboys.join(' '));
        }
    } else {
        bot.say('VueJS was counted: ' + db.get('vue.counter'));
    }
};

module.exports.default = {
    name: 'vuejs',
    alias: 'vue',
    enabled: true,
    responder
};