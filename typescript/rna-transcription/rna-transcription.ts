class Transcriptor {
    toRna(strand: string): string {
        return strand
                .split('')
                .map(nucleotide => this.transcriptNucleotide(nucleotide))
                .join('');
    }

    private DNAtoRNA: Record<string, string> = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    private transcriptNucleotide(nucleotide: string) {
        const rna = this.DNAtoRNA[nucleotide]
        if (!rna) {
            throw 'Invalid input DNA.'
        }
        return rna
    }
}

export default Transcriptor