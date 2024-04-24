package main

import (
	"testing"
)

func TestTriangleWithZeroLength(t *testing.T) {
	// Edge case with zero side length
	if triangleType(0, 1, 1) != "not a triangle" {
		t.Error("Test with zero side length failed")
	}
}

func TestTriangleWithNegativeLength(t *testing.T) {
	// Edge case with negative side length
	if triangleType(-1, 1, 1) != "not a triangle" {
		t.Error("Test with negative side length failed")
	}
}

func TestTriangleWithSidesEqualToBoundary(t *testing.T) {
	// Test where the sum of two sides equals the third
	if triangleType(1, 2, 3) != "not a triangle" {
		t.Error("Test with sides equal to boundary failed")
	}
}

func TestTriangleJustBelowBoundary(t *testing.T) {
	// Test just below the boundary where the sum of two smaller sides is less than the third
	if triangleType(1, 2, 2) != "isosceles" {
		t.Error("Test just below boundary failed")
	}
}

func TestTriangleWithLargeNumbers(t *testing.T) {
	// Test with very large side lengths that form a triangle
	if triangleType(100000, 100000, 100000) != "equilateral" {
		t.Error("Test with large numbers that form a triangle failed")
	}
}

func TestTriangleLargeNumbersNotATriangle(t *testing.T) {
	// Test with large numbers where the sum of two sides is exactly one more than the third, hence not a triangle
	if triangleType(100000, 100000, 200001) != "not a triangle" {
		t.Error("Test with large numbers that do not form a triangle failed")
	}
}

func TestTriangleAllSidesEqualMinimal(t *testing.T) {
	// Minimal positive case for an equilateral triangle
	if triangleType(1, 1, 1) != "equilateral" {
		t.Error("Minimal equilateral triangle test failed")
	}
}

func TestTriangleJustAboveBoundary(t *testing.T) {
	// Test just above the boundary where the sum of two smaller sides is greater than the third
	if triangleType(2, 3, 4) != "scalene" {
		t.Error("Test just above boundary failed")
	}
}
