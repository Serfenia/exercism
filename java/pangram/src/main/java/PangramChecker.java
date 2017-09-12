import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class PangramChecker {

    public boolean isPangram(String input) {
        String[] inputAsArray = input.toLowerCase().replaceAll("[^A-Za-z]", "").split("");
        Set<String> uniques = new HashSet(Arrays.asList(inputAsArray));
        return uniques.size() == 26;
    }
}
