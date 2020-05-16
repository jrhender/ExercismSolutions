// Package luhn provides functions relating to luhn numbers
package luhn

import (
	"strings"
	"unicode"
)

// Valid returns true if input string is a valid luhn number
func Valid(input string) bool {
	input = strings.ReplaceAll(input, " ", "")

	if len(input) <= 1 {
		return false
	}

	evenIndex := false
	if len(input)%2 == 0 {
		evenIndex = true // Set to true because last number from right to left is even
	}

	sum := 0
	for _, r := range input {
		if unicode.IsDigit(r) == false {
			return false
		}
		digit := int(r - '0') //ASCII digit codes are sequential from 0, so subtract 0 rune value to get digit
		if evenIndex {
			digit *= 2
			if digit > 9 {
				digit -= 9
			}
		}
		sum += digit
		evenIndex = !evenIndex
	}
	return sum%10 == 0
}
