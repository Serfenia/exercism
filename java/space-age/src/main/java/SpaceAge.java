class SpaceAge {

    private double seconds;
    private final double EARTH_ORBIT = 31557600;
    private final double MERCURY_RATIO = 0.2408467;
    private final double VENUS_RATIO = 0.61519726;
    private final double MARS_RATIO = 1.8808158;
    private final double JUPITER_RATIO =  11.862615;
    private final double SATURN_RATIO = 29.447498;
    private final double URANUS_RATIO = 84.016846;
    private final double NEPTUNE_RATIO = 164.79132;

    SpaceAge(double seconds) {
        this.seconds = seconds;
    }

    double getSeconds() {
        return this.seconds;
    }

    double onEarth() {
        return seconds / EARTH_ORBIT;
    }

    double onMercury() {
        return this.onEarth() / MERCURY_RATIO;
    }

    double onVenus() {
        return this.onEarth() / VENUS_RATIO;
    }

    double onMars() {
        return this.onEarth() / MARS_RATIO;
    }

    double onJupiter() {
        return this.onEarth() / JUPITER_RATIO;
    }

    double onSaturn() {
        return this.onEarth() / SATURN_RATIO;
    }

    double onUranus() {
        return this.onEarth() / URANUS_RATIO;
    }

    double onNeptune() {
        return this.onEarth() / NEPTUNE_RATIO;
    }

}
