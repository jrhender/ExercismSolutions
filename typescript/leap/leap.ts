function isLeapYear(year: number): boolean {
    return (isDivisibleBy(4) && !isDivisibleBy(100)) || isDivisibleBy(400);

    function isDivisibleBy(denominator: number): boolean {
        return year % denominator == 0;
    } 
}

export default isLeapYear