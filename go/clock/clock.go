package clock

// New constructs new Clock
func New(hour, minute int) Clock {
	if hour < 0 || hour > 24 {
		// return Clock{}, errors.New("hour must be between 0 and 24")
		return Clock{}
	}
	if minute < 0 || minute > 60 {
		//return Clock{}, errors.New("minute must be between 0 and 60")
		return Clock{}
	}
	totalMinutes := hour*60 + minute
	return Clock{totalMinutes}
}

// Subtract removes minutes from a clock
func (c Clock) Subtract(minutes int) Clock {
	c.Minutes = c.Minutes - minutes
	return c
}

// Add adds minutes to a clock
func (c Clock) Add(minutes int) Clock {
	c.Minutes = c.Minutes + minutes
	return c
}

// String returns clock value in 24 hour notation
func (c Clock) String() string {
	return ""
}

// Clock keeps track of time
type Clock struct {
	Minutes int
}
