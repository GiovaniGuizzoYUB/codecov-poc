package main

import "testing"

// TestCompareNumbersLess tests compareNumbers with a less than b.
func TestCompareNumbersLess(t *testing.T) {
	result := compareNumbers(1, 2)
	expected := "a < b"
	if result != expected {
		t.Errorf("compareNumbers(1, 2) = %q, want %q", result, expected)
	}
}

// TestCompareNumbersGreater tests compareNumbers with a greater than b.
func TestCompareNumbersGreater(t *testing.T) {
	result := compareNumbers(2, 1)
	expected := "a > b"
	if result != expected {
		t.Errorf("compareNumbers(2, 1) = %q, want %q", result, expected)
	}
}

// TestCompareNumbersEqual tests compareNumbers with a equal to b.
func TestCompareNumbersEqual(t *testing.T) {
	result := compareNumbers(1, 1)
	expected := "a === b"
	if result != expected {
		t.Errorf("compareNumbers(1, 1) = %q, want %q", result, expected)
	}
}
