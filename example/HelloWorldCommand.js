const responder = (bot, chatter) => {
    bot.say('Hello World executed! PogChamp')
};

module.exports.default = {
    name: 'helloworld',
    alias: 'hello',
    enabled: true,
    responder
};
