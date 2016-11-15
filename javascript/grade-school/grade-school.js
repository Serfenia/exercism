module.exports = class School {
    constructor() {
        this.map = {};
    }

    add(name, grade) {
        this.map[grade] = (this.map[grade] || []).concat(name).sort();
    }

    grade(grade) {
        return this.map[grade] || [];
    }

    roster() {
        return this.map;
    }
};