class Transcriptor {
    toRna(strand: string): string {
        return strand
                .split('')
                .map(nucleotide => this.transcriptNucleotide(nucleotide))
                .join('');
    }
    
    private DNAtoRNA:Map<string, string> = new Map([
        ['G', 'C'],
        ['C', 'G'],
        ['T', 'A'],
        ['A', 'U']
    ]);

    private transcriptNucleotide(nucleotide: string) {
        const rna = this.DNAtoRNA.get(nucleotide)
        if (!rna) {
            throw 'Invalid input DNA.'
        }
        return rna
    }
}

export default Transcriptor