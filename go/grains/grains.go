package grains

import (
	"errors"
)

// Square returns the number of grains on a given square of the chessboard (i.e. 2^(n-1))
func Square(square int) (uint64, error) {
	if square < 1 || square > 64 {
		return 0, errors.New("input out of range")
	}
	return 1 << (square - 1), nil
}

// Total return the total number of grains on the 64 square chessboard
func Total() uint64 {
	// A uint64 with all 1 bits is the total.
	// Effectively, each bit represents a square on the chessboard
	return 1<<64 - 1
}
