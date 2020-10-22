class Pangram {
    constructor(private readonly input: string) {}

    isPangram() {
        const loweredInput = this.input.toLowerCase()
        return this.alphabet.every((c) => loweredInput.includes(c))
    }
    
    private readonly alphabet = new Array<string>(
        'a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v',
        'w','x','y','z'
    )
}

export default Pangram