class Bob {
    hey(input: string): BobReplies {
        const trimmedInput = input.trim();
        const isYelling = this.isYelling(trimmedInput);
        const isQuestion = trimmedInput.endsWith("?")
        if (isYelling && isQuestion) {
            return "Calm down, I know what I'm doing!";
        }
        if (isYelling) {
            return "Whoa, chill out!";
        }
        if (isQuestion) {
            return "Sure.";
        }
        if (trimmedInput === "") {
            return "Fine. Be that way!";
        }
        return "Whatever."
    }

    private isYelling(input: string): boolean {
        const lettersOnly = input.replace(/[^a-z]/gi, '');
        return lettersOnly.length > 0 && lettersOnly === lettersOnly.toUpperCase();
    }
}

type BobReplies =
    "Calm down, I know what I'm doing!" |
    "Whoa, chill out!" |
    "Sure." |
    "Fine. Be that way!" |
    "Whatever."

export default Bob