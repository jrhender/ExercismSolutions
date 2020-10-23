// Approach used is to view the "name" as a number between 100 and (26*26*999 - 100)
class Robot {
    private readonly alphabetSize = 26
    private readonly mameMaximumNumber = 999

    // availableNumbers are used to keep track of numbers which have been used
    private availableNumbers = [...Array(this.alphabetSize*this.alphabetSize*this.mameMaximumNumber).keys()]

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
        const firstLetter = convertToLetter(source%this.alphabetSize)
        const firstQuotient = Math.floor(source/this.alphabetSize) 
        const secondLetter = convertToLetter(firstQuotient%this.alphabetSize)
        const secondQuotient = Math.floor(firstQuotient/this.alphabetSize)
        const number = ('00' + secondQuotient%this.mameMaximumNumber).slice(-3)
        return firstLetter + secondLetter + number 
    }

    // getRandomNum selects and removes a random number from an array
    private getRandomNum(possibleNumbers: Array<number>): {possibleNumbers: Array<number>, newNumber: number} {
        const newNumber = possibleNumbers.splice(Math.floor(Math.random() * (possibleNumbers.length-1)), 1)[0]
        return {possibleNumbers, newNumber}
    }
}

export default Robot