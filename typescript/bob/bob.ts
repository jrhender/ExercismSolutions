class Bob {
    hey(input: string) {
        const isYelling = this.isYelling(input);
        const trimmedInput = input.trim();
        const isQuestion = trimmedInput[trimmedInput.length-1] === "?";
        if (isYelling && isQuestion) {
            return "Calm down, I know what I'm doing!";
        }
        else if (isYelling) {
            return "Whoa, chill out!";
        }
        else if (isQuestion) {
            return "Sure.";
        }
        else if (trimmedInput === "") {
            return "Fine. Be that way!";
        }
        return "Whatever."
    }

    private isYelling(input: string): boolean {
        const lettersOnly = input.replace(/[^a-z]/gi, '');
        return lettersOnly.length == 0 ? false : lettersOnly === lettersOnly.toUpperCase();
    }
}

export default Bob