package main

// compareNumbers takes two integers, a and b, and returns a string describing their relationship.
func compareNumbers(a int, b int) string {
	if a < b {
		return "a < b"
	} else if a > b {
		return "a > b"
	} else if a+b == 5 {
		return "a + b == 5"
	} else if a+b == 10 {
		return "a + b == 10"
	} else {
		return "a === b"
	}
}
