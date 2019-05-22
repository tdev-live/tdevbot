const config = require('./config');
const commands = require('./commands/index');
const listeners = require('./listeners/index');
const TwitchBot = require('twitch-bot');
const bot = new TwitchBot({
    username: config.username,
    oauth: config.oauth,
    channels: config.channels
});

bot.on('join', channel => console.log(`Joined channel: ${channel}`));
bot.on('error', err => console.log(err));

// Commands
bot.on('message', chatter => {
    Object.keys(commands).forEach(commandKey => {
        const command = commands[commandKey];
        const message = chatter.message;

        if (!command.enabled ) return;

        let splittedMessage = message.split(' ');
        if (splittedMessage[0] === '!' + command.name || splittedMessage[0] === '!' + command.alias) {
            command.responder(bot, chatter, splittedMessage[1] ? splittedMessage[1] : null);

            return false;
        }
    });
});

// Listeners
bot.on('message', chatter => {
    Object.keys(listeners).forEach(listenerKey => {
        const listener = listeners[listenerKey];

        if (!listener.enabled || chatter.message.charAt(0) === '!') return;

        listener.worker(chatter);
    });
});