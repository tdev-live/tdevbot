const config = require('../config');
const responder = (bot, chatter) => {
    bot.say('HeyGuys Join us! ' + config.website)
};

module.exports.default = {
    name: 'website',
    alias: 'web',
    enabled: true,
    responder
};