function PhoneNumber(phoneNr) { this.phoneNr = phoneNr; }

PhoneNumber.prototype.number = function() {
    let stripped = this.phoneNr.replace(/[^0-9]+/g, '');
    stripped = stripped.length === 11 ? stripped.replace(/^1/, '') : stripped;
    return stripped.length === 10 ? stripped : '0000000000';
};

PhoneNumber.prototype.areaCode = function() {
    return this.phoneNr.slice(0, 3)
};

PhoneNumber.prototype.toString = function() {
    return `(${this.areaCode()}) ${this.phoneNr.slice(3,6)}-${this.phoneNr.slice(6, 10)}`;
};

module.exports = PhoneNumber;