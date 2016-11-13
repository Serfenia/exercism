function GigaSecond(birth) {
    this.birth = birth;
    this.giga_second_as_ms = 1000000000000;
}

GigaSecond.prototype.date = function() {
    return new Date(this.birth.getTime() + this.giga_second_as_ms);
};

module.exports = GigaSecond;