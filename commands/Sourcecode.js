const responder = (bot, chatter) => {
    bot.say('MrDestructoid Here you can find my sourcecode https://github.com/tdev-live/tdevbot');
};

module.exports.default = {
    name: 'sourcecode',
    alias: 'code',
    enabled: true,
    responder
};
