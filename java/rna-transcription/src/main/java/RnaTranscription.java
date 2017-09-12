class RnaTranscription {

    String transcribe(String dnaStrand) {
        if (!dnaStrand.matches("[G|C|A|T]+$")) throw new IllegalArgumentException("Invalid input");
        return dnaStrand
                .replaceAll("G", "c")
                .replaceAll("C", "G")
                .replaceAll("A", "U")
                .replaceAll("T", "A")
                .toUpperCase();
    }

}
