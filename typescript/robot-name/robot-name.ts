// Approach used is to view the "name" as a number between 100 and (26*26*999 - 100)
class Robot {
    private readonly alphabetSize = 26
    private readonly mameMaximumNumber = 999

    // availableNumbers are used to keep track of numbers which have been used
    private availableNumbers = Array.from(
        {length: this.alphabetSize*this.alphabetSize*this.mameMaximumNumber},
        (_, i) => i)

    name = this.getNewName()

    resetName() {
        this.name = this.getNewName()
    }

    private getNewName(): string {
        const {possibleNumbers, newNumber} = this.getRandomNum(this.availableNumbers)
        this.availableNumbers = possibleNumbers
        return this.getName(newNumber)
    }

    // getName approach is inspired by hex to decimal conversion
    private getName(source: number) {
        const convertToLetter = (n: number) => String.fromCharCode(n + 65)
        const firstLetter = convertToLetter(source%26)
        const firstQuotient = Math.floor(source/26) 
        const secondLetter = convertToLetter(firstQuotient%26)
        const secondQuotient = Math.floor(firstQuotient/26)
        const number = ('00' + secondQuotient%this.mameMaximumNumber).slice(-3)
        return firstLetter + secondLetter + number 
    }

    private getRandomNum(possibleNumbers: Array<number>): {possibleNumbers: Array<number>, newNumber: number} {
        const newNumber = possibleNumbers.splice(Math.floor(Math.random() * (possibleNumbers.length-1)), 1)[0]
        return {possibleNumbers, newNumber}
    }
}

export default Robot