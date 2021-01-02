#ifndef ARMSTRONG_NUMBERS
#define ARMSTRONG_NUMBERS

#include <stdbool.h>

bool is_armstrong_number(int candidate);
int count_digits(int subject);
int sum_exponentiated_digits(int subject, int exp);
int ipow(int base, int exp);

#endif
