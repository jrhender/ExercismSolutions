package luhn

import "strings"

// Valid returns true if input string is a valid luhn number
func Valid(input string) bool {
	input = strings.TrimSpace(input)
	sum := 0
	for i := 1; i <= len(input); i++ { //De
		j := len(input) - i
		s := input[j]
		digit := int(s)
		if j%2 == 0 {
			digit = digit * 2
			if digit > 9 {
				digit = digit - 9
			}
		}
		sum += digit
	}
	if sum%10 == 0 {
		return true
	}
	return false
}
