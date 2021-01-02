#include "armstrong_numbers.h"

bool is_armstrong_number(int candidate)
{
    int count = count_digits(candidate);
    int sum = sum_exponentiated_digits(candidate, count);
    return candidate == sum;
}

// Returns number of digits in subject
int count_digits(int subject) {
    int count = 0;
    while (subject > 0)
    {
        subject /= 10;
        count++;
    }
    return count;
}

// Returns sum of each digit in subject exponentiated the a given power
int sum_exponentiated_digits(int subject, int exp) {
    int sum = 0;
    while (subject > 0)
    {
        int digit = subject % 10;
        sum += ipow(digit, exp);
        subject /= 10;
    }
    return sum;
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
