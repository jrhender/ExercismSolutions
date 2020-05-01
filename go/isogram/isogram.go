// Package isogram provides functions relating to isograms
package isogram

import (
	"unicode"
)

// IsIsogram returns true if the input string is an isogram, false if it is not
func IsIsogram(word string) bool {
	set := make(map[rune]bool)
	for _, r := range word {
		if unicode.IsLetter(r) == false { // ok to have duplicate non-letter characters
			continue
		}
		r = unicode.ToLower(r) // isograms are case insensitive
		if set[r] {            // set already contain letter so not an isogram
			return false
		}
		set[r] = true
	}
	return true // no duplicates found so it is an isogram
}
