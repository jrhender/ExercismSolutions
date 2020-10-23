import { stringify } from "querystring";

class Robot {
    private readonly usedNames = new Set<string>()

    constructor() {
        this.name = this.getNewName()
        this.usedNames.add(this.name)
    }

    name: string

    resetName() {
        while (true) {
            const newName = this.getNewName()
            if (!this.usedNames.has(newName)) {
                this.name = newName
                this.usedNames.add(newName)
                break
            }
        }
    }

    private getNewName(): string {
        const firstLetter = String.fromCharCode(this.getRandomNum(26) + 65)
        const secondLetter = String.fromCharCode(this.getRandomNum(26) + 65)
        const number = this.getRandomNum(1000)
        return firstLetter + secondLetter + number 
    }

    private getRandomNum(max: number ): number {
        return Math.floor(Math.random() * max);
    }
}

export default Robot