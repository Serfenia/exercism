function Isogram(str) {
    this.str = str.toLowerCase();
}

Isogram.prototype.isIsogram = function () {
    const splitted = this.str.split('');
    return splitted.reduce((chars, curr) => {
        if (chars.indexOf(curr) === -1 || !curr.match(/[^\s\-]/)) chars.push(curr);
        return chars;
    }, []).length === splitted.length;
};

module.exports = Isogram;