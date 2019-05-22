const worker = (chatter) => {
    let matches = chatter.message.match(/hello\b/ig);

    if (!matches || !matches.length) return;

    console.log(matches);
};

module.exports.default = {
    enabled: true,
    worker
};