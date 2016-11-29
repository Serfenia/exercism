class Clock {
    static at(h = 0, m = 0) {
        const clock = new Clock();
        clock.h = (24 + ((h < 0 ? 24 - (Math.abs(h) % 24) : h) + Math.floor(m / 60)) % 24) % 24;
        clock.m = m < 0 ? 60 - (Math.abs(m) % 60) : m % 60;
        return clock;
    }

    plus(m) {
        return Clock.at(this.h, this.m + m);
    }

    minus(m) {
        return Clock.at(this.h, this.m - m);
    }

    equals(clock) {
        return this.h === clock.h && this.m === clock.m;
    }

    getWithPrefix(v) {
        return v < 10 ? `0${v}` : v;
    }

    toString() {
        return `${this.getWithPrefix(this.h)}:${this.getWithPrefix(this.m)}`;
    }
}

module.exports = Clock;