module.exports = class Triangle {
    constructor(x, y, z) {
        this.values = [x, y, z].sort((a, b) => a > b);
        this.differentSides = Object.keys(this.values.reduce((acc, curr) => {
                acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
                return acc;
            }, {})).length;

    }

    kind() {
        if (this.values.some((v) => v <= 0)) throw new Error('Invalid triangle');
        if (this.differentSides === 1)  return 'equilateral';
        if (this.values[0] + this.values[1] < this.values[2]) throw new Error('Illegal triangle');
        return this.differentSides === 2 ? 'isosceles' : 'scalene';
    }
};