// Package twofer has function to generate a twofer message
package twofer

import (
	"fmt"
)

// ShareWith return a message using input name.
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return fmt.Sprintf("One for %s, one for me.", name)
}
