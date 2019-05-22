const requireContext = require('require-context');
const requireCommand = requireContext(__dirname, false, /\.js$/);
let commands = {};

requireCommand.keys().forEach(filename => {
    filename = './' + filename;
    if (filename === './index.js') return;

    const commandName = filename.replace(/(\.\/|\.js)/g, '');

    const command = requireCommand(filename);
    commands[commandName] = command.default;
});

module.exports = commands;