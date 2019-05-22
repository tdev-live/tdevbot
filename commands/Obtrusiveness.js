const db = require('../database/db');

const responder = (bot, chatter) => {
    const vueObt = db.get('vue.fanboys')
                     .find({username: chatter.username})
                     .value();

    const reactObt = db.get('react.fanboys')
                       .find({username: chatter.username})
                       .value();

    if (!reactObt && !vueObt) {
        bot.say(`Sorry can\'t find you ${chatter.username}. BibleThump`);
    } else {
        bot.say(`Your annoyance level is VueJS: ${vueObt ? vueObt.obtrusiveness : 0}, ReactJS: ${reactObt ? reactObt.obtrusiveness : 0} Kappa`);
    }
};

module.exports.default = {
    name: 'obtrusiveness',
    alias: 'obt',
    enabled: true,
    responder
};
