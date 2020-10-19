class Pangram {
    constructor(private readonly input: string) {}

    isPangram() {
        const letters = new Map<string, boolean>();
        const firstCharCode = 'a'.charCodeAt(0);
        const numLettersInAlphabet = 26
        for (let i = firstCharCode; i < firstCharCode + numLettersInAlphabet; i++) {
            letters.set(String.fromCharCode(i), false)
        }

        for (const c of this.input.toLowerCase()) {
            if (letters.has(c)) {
                letters.set(c, true)
            }
        }
        return [...letters].filter(l => l[1] == false).length == 0
    }
}

export default Pangram