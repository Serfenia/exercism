function Pangram(str) {
    this.str = str.toLowerCase();
    this.alphabetLength = 26;
}

Pangram.prototype.isPangram = function () {
    return this.str.split('').reduce((chars, curr) => {
        if (chars.indexOf(curr) === -1 && curr.match(/^[a-z]/i)) chars.push(curr);
        return chars;
    }, []).length === this.alphabetLength;
};

module.exports = Pangram;