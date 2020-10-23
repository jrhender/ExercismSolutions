class Robot {
    private availableNumbers = Array.from({length: 26*26*1000}, (_, i) => i + 100)

    constructor() {
        this.name = this.getNewName()
    }

    name: string

    resetName() {
        this.name = this.getNewName()
    }

    private getNewName(): string {
        const {possibleNumbers, newNumber} = this.getRandomNum(this.availableNumbers)
        this.availableNumbers = possibleNumbers
        return this.getName(newNumber)
    }

    private getName(source: number) {
        const convertToLetter = (n: number) => String.fromCharCode(n + 65)
        const firstLetter = convertToLetter(source%26)
        const firstQuotient = Math.floor(source/26) 
        const secondLetter = convertToLetter(firstQuotient%26)
        const secondQuotient = Math.floor(firstQuotient/26)
        const number = secondQuotient%1000
        return firstLetter + secondLetter + number 
    }

    private getRandomNum(possibleNumbers: Array<number>): {possibleNumbers: Array<number>, newNumber: number} {
        const newNumber = possibleNumbers.splice(Math.floor(Math.random() * (possibleNumbers.length-1)), 1)[0]
        return {possibleNumbers, newNumber}
    }
}

export default Robot