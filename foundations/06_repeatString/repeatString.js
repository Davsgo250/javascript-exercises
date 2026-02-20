const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let wordJoin = ``;
    for (let i = 0; i < times; i++) {
        wordJoin += word;
    }
    return wordJoin;
};

// Do not edit below this line
module.exports = repeatString;
