function Words() {}

Words.prototype.count = function(str) {
    return str.trim().toLowerCase()
        .split(/\s+/)
        .reduce((counts, curr) => {
            counts[curr] = counts.hasOwnProperty(curr) ? counts[curr] + 1 : 1;
            return counts;
        }, {});
};

module.exports = Words;