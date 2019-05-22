const responder = (bot, chatter) => {
    bot.say('You can find a list of all Commands here https://github.com/tdev-live/tdevbot/blob/master/docs/commands.md');
};

module.exports.default = {
    name: 'help',
    alias: '?',
    enabled: true,
    responder
};
