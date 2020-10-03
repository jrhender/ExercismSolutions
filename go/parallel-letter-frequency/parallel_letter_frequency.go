package letter

import "sync"

// FreqMap records the frequency of each rune in a given text.
type FreqMap map[rune]int

// Frequency counts the frequency of each rune in a given text and returns this
// data as a FreqMap.
func Frequency(s string) FreqMap {
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	return m
}

func ConcurrentFrequency(s string) FreqMap {
	c := make(chan rune)
	m := sync.Map[rune]int
	// Start go routines
	for i := 0; i < 5; i++ {
		go processRune(c)
	}
	c <- range s //This should send data to channel
	// Need to wait until channel is empty and data is processed somehow
	return m // Need to convert to FreqMap

	//Need to confirm that can do nested functions
func processRune(c chan rune) {
	for {
		r := <-c
		// Write using sync.Map
		m[r]++
	}
}
}

