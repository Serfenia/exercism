import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/*
 * version: 1.1.0
 */
public class PangramCheckerTest {

    private PangramChecker pangramChecker;

    @Before
    public void setup() {
        pangramChecker = new PangramChecker();
    }

    @Test
    public void emptySentenceIsNotPangram() {
        assertFalse(pangramChecker.isPangram(""));
    }

    @Test
    public void pangramWithOnlyLowerCaseLettersIsRecognizedAsPangram() {
        assertTrue(pangramChecker.isPangram("the quick brown fox jumps over the lazy dog"));
    }

    @Test
    public void phraseMissingCharacterXIsNotPangram() {
        assertFalse(pangramChecker.isPangram("a quick movement of the enemy will jeopardize five gunboats"));
    }

    @Test
    public void anotherPhraseMissingCharacterXIsNotPangram() {
        assertFalse(pangramChecker.isPangram("the quick brown fish jumps over the lazy dog"));
    }

    @Test
    public void pangramWithUnderscoresIsRecognizedAsPangram() {
        assertTrue(pangramChecker.isPangram("the_quick_brown_fox_jumps_over_the_lazy_dog"));
    }

    @Test
    public void pangramWithNumbersIsRecognizedAsPangram() {
        assertTrue(pangramChecker.isPangram("the 1 quick brown fox jumps over the 2 lazy dogs"));
    }

    @Test
    public void phraseWithMissingLettersReplacedByNumbersIsNotPangram() {
        assertFalse(pangramChecker.isPangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog"));
    }

    @Test
    public void pangramWithMixedCaseAndPunctuationIsRecognizedAsPangram() {
        assertTrue(pangramChecker.isPangram("\"Five quacking Zephyrs jolt my wax bed.\""));
    }

    @Test
    public void upperAndLowerCaseVersionsOfTheSameCharacterShouldNotBeCountedSeparately() {
        assertFalse(pangramChecker.isPangram("the quick brown fox jumps over with lazy FX"));
    }
}
