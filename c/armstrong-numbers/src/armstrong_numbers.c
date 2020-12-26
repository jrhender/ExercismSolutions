#include "armstrong_numbers.h"
#include <math.h>

bool is_armstrong_number(int candidate)
{
    int quotient;

    // Get count
    double count = 0;
    quotient = candidate;
    while (quotient > 0)
    {
        quotient /= 10;
        count++;
    }

    // Sum exponentiated digits
    double sum = 0;
    quotient = candidate;
    while (quotient > 0)
    {
        int digit = quotient % 10;
        sum += pow( (double) digit, count);
        quotient /= 10;
    }
    
    return (double) candidate == sum;
}
