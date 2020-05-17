package grains

import (
	"errors"
)

// Square returns the number of grains on a given square of the chessboard (i.e. 2^(n-1))
func Square(chessboardSquare int) (uint64, error) {
	if chessboardSquare < 1 || chessboardSquare > 64 {
		return 0, errors.New("input out of range")
	}
	n := uint8(chessboardSquare)
	result := uint64(1 << (n - 1))
	return result, nil
}

// Total return the total number of grains on the 64 square chessboard
func Total() uint64 {
	// A uint64 with all 1 bits is the total.
	// Effectively, each bit represents a square on the chessboard
	return ^uint64(0)
}
