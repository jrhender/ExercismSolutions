package luhn

import "testing"

func TestLuhn(t *testing.T) {
	s := "055 444 285"
	if Valid(s) == false {
		t.Fail()
	}

}
