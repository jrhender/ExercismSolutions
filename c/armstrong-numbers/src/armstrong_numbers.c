#include "armstrong_numbers.h"
#include <math.h>

bool is_armstrong_number(int candidate)
{

    // Get count
    int value = candidate;
    double count = 0;
    while (value > 0)
    {
        value /= 10;
        count++;
    }

    // Sum exponentiated digits
    double sum = 0;
    int value2 = candidate;
    while (value2 > 0)
    {
        int digit = value2 % 10;
        sum += pow( (double) digit, count);
        value2 /= 10;
    }
    
    return (double) candidate == sum;
}
