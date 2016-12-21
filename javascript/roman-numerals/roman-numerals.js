const romanNumbers = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M'
};
const keys = Object.keys(romanNumbers);
const romanCount = keys.length;

module.exports = (num) => {
    let romanString = '';
    for (let i = romanCount - 1; i < romanCount; i--) {
        if (num <= 0) { return romanString; }
        const n = +keys[i];
        if (num >= n) {
            num -= n;
            romanString += romanNumbers[n];
            i++;
        }
    }
};