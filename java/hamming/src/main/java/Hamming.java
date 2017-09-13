import java.util.stream.IntStream;
import java.util.Arrays;


public class Hamming {
    String left;
    String right;

    Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) {
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
        left = leftStrand;
        right = rightStrand;
    }

    int getHammingDistance() {
        return IntStream.range(0, left.length())
            .reduce(0, (acc, i) ->
                left.charAt(i) == right.charAt(i) ? acc : acc + 1
            );
    }

}
