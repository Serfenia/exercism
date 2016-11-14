module.exports = class FoodChain {
    constructor() {
        this.chain = [
            {beast: 'fly', eats: null, riddle: ''},
            {beast: 'spider', eats: 'fly', riddle: 'It wriggled and jiggled and tickled inside her.\n'},
            {
                beast: 'bird',
                eats: 'spider',
                riddle: 'How absurd to swallow a bird!\n',
                chainRiddle: ' that wriggled and jiggled and tickled inside her.\n'
            },
            {beast: 'cat', eats: 'bird', riddle: 'Imagine that, to swallow a cat!\n'},
            {beast: 'dog', eats: 'cat', riddle: 'What a hog, to swallow a dog!\n'},
            {beast: 'goat', eats: 'dog', riddle: 'Just opened her throat and swallowed a goat!\n'},
            {beast: 'cow', eats: 'goat', riddle: 'I don\'t know how she swallowed a cow!\n'},
            {beast: 'horse', eats: null, riddle: 'She\'s dead, of course!\n'}
        ];
    }

    getChainRiddle(step) {
        return step.hasOwnProperty('chainRiddle') ? step.chainRiddle : '.\n';
    }

    getSongPart(step, i, from) {
        if (from === this.chain.length - 1) {
            return `I know an old lady who swallowed a ${step.beast}.\n${step.riddle}`;
        } else if (i === from) {
            const str = `I know an old lady who swallowed a ${step.beast}.\n${step.riddle}`;
            if (i === 0) {
                return str + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
            } else {
                return `${str}She swallowed the ${step.beast} to catch the ${step.eats}${this.getChainRiddle(step)}`;
            }
        } else if (i === 0) {
            return `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`;
        } else {
            return `She swallowed the ${step.beast} to catch the ${step.eats}${this.getChainRiddle(step)}`;
        }
    }

    verse(from) {
        from--;
        return this.chain
            .filter((step, i) => from === this.chain.length - 1 ? i === from : i <= from)
            .map((step, i) => this.getSongPart(step, i, from))
            .reverse()
            .reduce((song, curr) => song + curr, '');
    }

    verses(from, to) {
        let song = '';
        while (from <= to) {
            song += this.verse(from) + '\n';
            from++;
        }
        return song;
    }
};