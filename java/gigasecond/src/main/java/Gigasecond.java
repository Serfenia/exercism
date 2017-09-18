import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {

    private final long GIGA_SECOND = 1000000000;
    private LocalDateTime birthDateTime;

    Gigasecond(LocalDate birthDate) {
        this.birthDateTime = birthDate.atStartOfDay();
    }

    Gigasecond(LocalDateTime birthDateTime) {
        this.birthDateTime = birthDateTime;
    }

    LocalDateTime getDate() {
        return this.birthDateTime.plusSeconds(GIGA_SECOND);
    }

}
