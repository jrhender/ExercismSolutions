enum DNAtoRNA {
    G='C',
    C='G',
    T='A',
    A='U'
}
type DNA = keyof typeof DNAtoRNA;

class Transcriptor {
    toRna(strand: string): string {
        const DnaStrand = strand.split('') as  DNA[];
        return DnaStrand.map(nucleotide => DNAtoRNA[nucleotide]).join();
    }
}

export default Transcriptor