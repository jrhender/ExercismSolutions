function isLeapYear(year: number): boolean {
    if (isDivisibleBy4(year)) {
        if (isDivisibleBy100(year)) {
            return isDivisibleBy400(year)
        }
        return true;
    }
    return false;
}

function isDivisibleBy4(year: number): boolean {
    return year % 4 == 0;
} 

function isDivisibleBy100(year: number): boolean {
    return year % 100 == 0;
} 

function isDivisibleBy400(year: number): boolean {
    return year % 400 == 0;
} 

export default isLeapYear