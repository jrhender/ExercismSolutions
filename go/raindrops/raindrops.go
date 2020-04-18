// Package raindrops contains fun raindrop related functions
package raindrops

import (
	"strconv"
	"strings"
)

// Convert return a raindrops string based on
func Convert(r int) string {
	var builder strings.Builder
	noDiviserFound := true
	if r%3 == 0 {
		builder.WriteString("Pling")
		noDiviserFound = false
	}
	if r%5 == 0 {
		builder.WriteString("Plang")
		noDiviserFound = false
	}
	if r%7 == 0 {
		builder.WriteString("Plong")
		noDiviserFound = false
	}
	if noDiviserFound == true {
		builder.WriteString(strconv.Itoa(r))
	}
	return builder.String()
}
