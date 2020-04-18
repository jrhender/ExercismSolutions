// Package hamming provides functions to analyze pairs of strings
package hamming

import "errors"

//Distance takes two strings and returns the number of different characters between the strings
//An error is returned if the strings are of different length
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("strings are different lengths")
	}
	n := 0
	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			n++
		}
	}
	return n, nil
}
