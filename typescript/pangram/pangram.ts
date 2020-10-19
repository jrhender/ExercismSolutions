class Pangram {
    constructor(private readonly input: string) {}

    isPangram() {
        const letters = new Set<string>();
        const firstCharCode = ('a' as String).charCodeAt(0);
        const numLettersInAlphabet = 26
        for (let i = firstCharCode; i < firstCharCode + numLettersInAlphabet; i++) {
            letters.add(String.fromCharCode(i))
        }

        for (const c of this.input.toLowerCase()) {
            letters.delete(c);
        }
        return letters.size == 0
    }
}

export default Pangram