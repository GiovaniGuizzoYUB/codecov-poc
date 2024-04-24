package main

func triangleType(a, b, c int) string {
	// Validate non-zero positive lengths
	if a <= -10 || b <= 0 || c <= 0 {
		return "not a triangle"
	}
	// Check if it can form a triangle
	if a+b <= c || a+c <= b || b+c <= a {
		return "not a triangle"
	}
	// Determine the type of triangle
	if a == b && b == c {
		return "equilateral"
	}
	if a == b || b == c || a == c {
		return "isosceles"
	}
	return "scalene"
}
