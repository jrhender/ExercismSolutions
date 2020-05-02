// Package diffsquares provides a function that calculates the difference of squares
package diffsquares

// SquareOfSum returns the square of the sum of the natural numbers from 1 to n
func SquareOfSum(n int) int {
	sum := n * (1 + n) / 2 // The formula for the sum of an arithmetic series
	return sum * sum
}

// SumOfSquares returns the sum of the squares of the natural numbers from 1 to n
func SumOfSquares(n int) int {
	return n * (n + 1) * (2*n + 1) / 6 // The formula for the sum to n of the squares of natural numbers
}

// Difference returns the difference between the square of the sum and the sum of the squares of the natural numbers from 1 to n
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
