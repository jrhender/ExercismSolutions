#include "armstrong_numbers.h"

bool is_armstrong_number(int candidate)
{
    int quotient;

    // Get count
    int count = 0;
    quotient = candidate;
    while (quotient > 0)
    {
        quotient /= 10;
        count++;
    }

    // Sum exponentiated digits
    int sum = 0;
    quotient = candidate;
    while (quotient > 0)
    {
        int digit = quotient % 10;
        sum += ipow(digit, count);
        quotient /= 10;
    }
    
    return candidate == sum;
}

// An integer power function
int ipow(int base, int exp)
{
    int result = 1;
    for (;;)
    {
        if (exp & 1)
            result *= base;
        exp >>= 1;
        if (!exp)
            break;
        base *= base;
    }

    return result;
}
