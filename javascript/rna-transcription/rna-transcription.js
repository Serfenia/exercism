module.exports = function DnaTranscriber() {
    const conversion = { 'C': 'G', 'G': 'C', 'T': 'A', 'A': 'U', };
    return {
        toRna(dna) {
            return dna
                .split('')
                .map((c) => conversion[c])
                .join('');
        }
    }
}