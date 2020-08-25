package clock

import "fmt"

// New constructs new Clock
func New(hour, minute int) Clock {
	hour = hour % 24
	if hour < 0 {
		hour = hour + 24
	}
	minute = minute % (24 * 60)
	if minute < 0 {
		minute = minute + (24 * 60)
	}
	totalMinutes := hour*60 + minute
	return Clock{totalMinutes}
}

// Subtract removes minutes from a clock
func (c Clock) Subtract(minutes int) Clock {
	c.Minutes = (c.Minutes - minutes) % (24 * 60)
	if c.Minutes < 0 {
		c.Minutes = c.Minutes + (24 * 60)
	}
	return c
}

// Add adds minutes to a clock
func (c Clock) Add(minutes int) Clock {
	c.Minutes = (c.Minutes + minutes) % (24 * 60)
	return c
}

// String returns clock value in 24 hour notation
func (c Clock) String() string {
	hours := (c.Minutes / 60) % 24
	minutes := c.Minutes % 60
	return fmt.Sprintf("%02d:%02d", hours, minutes)
}

// Clock keeps track of time
type Clock struct {
	Minutes int
}
