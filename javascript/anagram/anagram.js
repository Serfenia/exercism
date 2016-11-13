function Anagram(str) {
    this.str = str.toLowerCase();
    this.strSorted = this.sortChars(this.str);
}

Anagram.prototype.sortChars = function(str) {
    return str.split('').sort().join('');
};

Anagram.prototype.matches = function (list) {
    list = (typeof list !== 'string' ? list : Object.keys(arguments).map((k) => arguments[k]));
    return list.filter((word) => {
        return this.sortChars(word.toLowerCase()) === this.strSorted
            && word.toLowerCase() !== this.str;
    });
};

module.exports = Anagram;