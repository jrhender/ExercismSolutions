class Bob {
    hey(input: string) {
        const trimmedInput = input.trim();
        const isYelling = this.isYelling(trimmedInput);
        const isQuestion = this.isQuestion(trimmedInput);
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

    private isQuestion(input: string): boolean {
        return input[input.length-1] === "?";
    }
}

export default Bob