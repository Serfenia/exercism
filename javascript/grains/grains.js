const BigInt = require('./big-integer');

module.exports = class Grains {
    square(to) {
        return this.getValue(to);
    }

    getValue(to) {
        return to === 1 ? '1' : (new BigInt(2)).pow(to - 1).toString();
    }

    sumRange(from, to, int) {
        int = int.add(this.getValue(from));
        return from < to ? this.sumRange(from + 1, to, int) : int;
    }

    total() {
        return this.sumRange(1, 64, new BigInt(0)).toString();
    }
};