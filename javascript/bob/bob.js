module.exports = function Bob() {
    return {
        hey: (input) => {
            if (input.trim() === '') {
                return 'Fine. Be that way!';
            } else if (input.match(/\b[A-Z0-9]{2,}\b/) && (input === input.toUpperCase() || input.endsWith('!'))) {
                return 'Whoa, chill out!';
            }
            return input.endsWith('?') ? 'Sure.' : 'Whatever.';
        }
    };
}