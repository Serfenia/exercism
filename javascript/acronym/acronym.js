module.exports = class Acronym {
    static parse(str) {
        return str.split(/(?=[A-Z][a-z])|\s|-/).reduce((a, p) => a + p.charAt(0).toUpperCase(), '')
    }
};