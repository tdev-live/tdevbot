const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(__dirname + '/db.json');
const db = low(adapter);

db.defaults({
    "react": {
        "counter": 0,
        "fanboys": []
    },
    "vue": {
        "counter": 0,
        "fanboys": []
    }
}).write();

// @todo add by channel

module.exports = db;