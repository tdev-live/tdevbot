const requireContext = require('require-context');
const requireListener = requireContext(__dirname, false, /\.js$/);
let listeners = {};

requireListener.keys().forEach(filename => {
    filename = './' + filename;
    if (filename === './index.js') return;

    const listenerName = filename.replace(/(\.\/|\.js)/g, '');

    const listener = requireListener(filename);
    listeners[listenerName] = listener.default;
});

module.exports = listeners;