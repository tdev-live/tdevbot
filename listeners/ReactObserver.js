const db = require('../database/db');

const worker = (chatter) => {
    let matches = chatter.message.match(/(react|reactjs)\b/ig);

    if (!matches || !matches.length) return;

    incrementCounter(matches.length);
    addFanboy(chatter);
};

const incrementCounter = matches => db.update('react.counter', n => n + matches).write();
const addFanboy = ({username}) => {
    const fanboy = db.get('react.fanboys')
                     .find({username})
                     .value();

    if (!fanboy) {
        db.get('react.fanboys')
          .push({username, obtrusiveness: 0})
          .write();
    } else {
        db.get('react.fanboys')
          .find({username})
          .update('obtrusiveness', n => n + 1)
          .write();
    }
};

module.exports.default = {
    enabled: true,
    worker
};