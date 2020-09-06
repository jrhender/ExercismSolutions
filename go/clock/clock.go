package clock

import "fmt"

// Clock keeps track of time
type Clock struct {
	Minutes int
}

// New constructs new Clock
func New(hour, minute int) Clock {
	m := minute + hour*60
	m %= 24 * 60
	if m < 0 {
		m += 24 * 60
	}
	return Clock{m}
}

// Subtract removes minutes from a clock
func (c Clock) Subtract(minutes int) Clock {
	return New(0, c.Minutes-minutes)
}

// Add adds minutes to a clock
func (c Clock) Add(minutes int) Clock {
	return New(0, c.Minutes+minutes)
}

// String returns clock value in 24 hour notation
func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.Minutes/60, c.Minutes%60)
}
