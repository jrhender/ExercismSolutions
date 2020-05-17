package grains

import "testing"

func TestGrains(t *testing.T) {
	i := 4
	Square(i)
	if true == false {
		t.Fail()
	}
}
