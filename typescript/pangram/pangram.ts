import { stringify } from "querystring";

class Pangram {
    constructor(private readonly input: string) {}

    isPangram() {
        const letters = new Set<string>();
        for (let i = 97; i < 97 + 26; i++) {
            letters.add(String.fromCharCode(i))
        }

        for (const c of this.input.toLowerCase()) {
            letters.delete(c);
        }
        return letters.size == 0
    }
}

export default Pangram