// Package isogram provides functions relating to isograms
package isogram

import "strings"

// IsIsogram returns true if the input string is an isogram, false if it is not
func IsIsogram(word string) bool {
	set := make(map[rune]struct{}) // Using empty struct because consumes 0 bytes
	exists := struct{}{}
	for _, r := range strings.ToLower(word) {
		if r == '-' || r == ' ' { // ok to have duplicate spaces or hyphens in isogram
			continue
		}
		if _, ok := set[r]; ok { // set already contain letter so not an isogram
			return false
		}
		set[r] = exists
	}
	return true // no duplicates found so it is an isogram
}
