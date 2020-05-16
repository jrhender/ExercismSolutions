// Package luhn provides functions relating to luhn numbers
package luhn

import (
	"strings"
	"unicode"
)

// Valid returns true if input string is a valid luhn number
func Valid(input string) bool {
	input = strings.ReplaceAll(input, " ", "")
	sum := 0
	runes := []rune(input)
	l := len(runes)
	if l <= 1 {
		return false
	}
	evenIndex := false // Initialize as false because we're starting at 1 in the loop below
	for i := 1; i <= l; i++ {
		s := runes[l-i]
		if unicode.IsDigit(s) == false {
			return false
		}
		digit := int(s - '0') //ASCII digit codes are sequential from 0, so subtract 0 rune value to get digit
		if evenIndex {
			digit *= 2
			if digit > 9 {
				digit -= 9
			}
		}
		sum += digit
		evenIndex = !evenIndex

	}
	if sum%10 == 0 {
		return true
	}
	return false
}
