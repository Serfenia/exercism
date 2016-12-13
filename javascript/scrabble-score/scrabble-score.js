const scores = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 8,
    'qz': 10
};
const keys = Object.keys(scores);

module.exports = (str) => {
    return (str || '')
        .toLowerCase()
        .split('')
        .reduce((acc, char) => acc + scores[keys.find((key) => key.includes(char))], 0);
};