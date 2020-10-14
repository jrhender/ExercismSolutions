function isLeapYear(year: number): boolean {
    const isDivisibleBy = (denominator: number): boolean => {
        return year % denominator == 0;
    } 
    return (isDivisibleBy(4) && !isDivisibleBy(100)) || isDivisibleBy(400);
}

export default isLeapYear