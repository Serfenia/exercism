const earthSeconds = 31557600;
module.exports = class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
        this.earthYears = this.seconds / earthSeconds
    }

    static toFixed(input) {
        return +(input.toFixed(2));
    }

    onEarth() {
        return SpaceAge.toFixed(this.earthYears);
    }

    onMercury() {
        return SpaceAge.toFixed(this.earthYears / 0.2408467);
    }

    onVenus() {
        return SpaceAge.toFixed(this.earthYears / 0.61519726);
    }

    onMars() {
        return SpaceAge.toFixed(this.earthYears / 1.8808158);
    }

    onJupiter() {
        return SpaceAge.toFixed(this.earthYears / 11.862615);
    }

    onSaturn() {
        return SpaceAge.toFixed(this.earthYears / 29.447498);
    }

    onUranus() {
        return SpaceAge.toFixed(this.earthYears / 84.016846);
    }

    onNeptune() {
        return SpaceAge.toFixed(this.earthYears / 164.79132);
    }
};