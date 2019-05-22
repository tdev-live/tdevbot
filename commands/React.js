const db = require('../database/db');

const responder = (bot, chatter, argument) => {
    if (argument === 'blame') {
        const fanboys = db.get('react.fanboys')
                          .filter(fanboy => {
                              return fanboy.obtrusiveness > 5;
                          })
                          .sortBy('obtrusiveness')
                          .take(20)
                          .value()
                          .map(({username}) => username);

        if (fanboys.length === 0) {
            bot.say('ReactJS has no fanboys! SeemsGood');
        } else {
            bot.say('These guys are ReactJS Fanboys! NotLikeThis ' + fanboys.join(' '));
        }
    } else {
        bot.say('ReactJS was counted: ' + db.get('react.counter'));
    }
};

module.exports.default = {
    name: 'reactjs',
    alias: 'react',
    enabled: true,
    responder
};