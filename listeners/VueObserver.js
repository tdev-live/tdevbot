const db = require('../database/db');

const worker = (chatter) => {
    let matches = chatter.message.match(/(vue|vuejs)\b/ig);

    if (!matches || !matches.length) return;

    incrementCounter(matches.length);
    addFanboy(chatter);
};

const incrementCounter = matches => db.update('vue.counter', n => n + matches).write();
const addFanboy = ({username}) => {
    const fanboy = db.get('vue.fanboys')
        .find({username})
        .value();

    if (!fanboy) {
        db.get('vue.fanboys')
            .push({username, obtrusiveness: 0})
            .write();
    } else {
        db.get('vue.fanboys')
            .find({username})
            .update('obtrusiveness', n => n + 1)
            .write();
    }
};

module.exports.default = {
    enabled: true,
    worker
};