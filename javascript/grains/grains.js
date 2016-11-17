const BigInt = require('./big-integer');

module.exports = class Grains {
    square(to) {
        return to === 1 ? '1' : (new BigInt(2)).pow(to - 1).toString();
    }

    total() {
        return (new BigInt(2)).pow(64).minus(1).toString();
    }
};