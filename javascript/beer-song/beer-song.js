function BeerSong() {}

BeerSong.prototype.getBottles = function(amount) {
    return amount > 0 ?  `${amount} bottle${amount > 1 ? 's' : ''}` : 'no more bottles';
};

BeerSong.prototype.verse = function (beers) {
    if (beers > 0) {
        return `${this.getBottles(beers)} of beer on the wall, ${this.getBottles(beers)} of beer.
Take ${beers > 1 ? 'one' : 'it'} down and pass it around, ${this.getBottles(beers - 1)} of beer on the wall.
`;
    }
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
};

BeerSong.prototype.sing = function(current, end = 0) {
    let song = '';
    while (current >= end) {
        song = song + this.verse(current) + (current !== end ? '\n': '');
        current--;
    }
    return song;
};

module.exports = BeerSong;