const names = [];

module.exports = class Robot {

    constructor() {
        this.reset();
    }

    static getRandomChar() {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getName() {
        const name = `${Robot.getRandomChar()}${Robot.getRandomChar()}${Robot.getRandomNumber(100, 999)}`;
        return names.indexOf(name) === -1 ? name : Robot.getName();
    }

    reset() {
        this.name = Robot.getName();
        names.push(this.name);
    }
};