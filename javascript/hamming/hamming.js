module.exports = function Hamming() {
    return {
        compute(a, b) {
            if (a.length !== b.length) { throw new Error('DNA strands must be of equal length.'); }
            b = b.split('');
            return a.split('')
                .map((char, index) => char !== b[index] ? 1 : 0)
                .reduce((a, b) => a + b);
        }
    }
};