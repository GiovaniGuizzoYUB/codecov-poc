package org.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;

public class TriangleTypeTest {

    public TriangleType triangleType;

    @BeforeEach
    public void beforeEach() {
        triangleType = new TriangleType();
    }

    @Test
    public void testTriangleWithAZeroLength() {
        // Edge case with zero side length
        assertEquals("not a triangle", triangleType.triangleType(0, 1, 1));
    }

    @Test
    public void testTriangleWithBZeroLength() {
        // Edge case with negative side length
        assertEquals("not a triangle", triangleType.triangleType(1, 0, 1));
    }

    @Test
    public void testTriangleWithCZeroLength() {
        // Edge case with negative side length
        assertEquals("not a triangle", triangleType.triangleType(1, 1, 0));
    }

    @Test
    public void testTriangleWithSidesEqualToBoundary() {
        // Test where the sum of two sides equals the third
        assertEquals("not a triangle", triangleType.triangleType(1, 2, 3));
    }

    @Test
    public void testTriangleJustAboveBoundary() {
        // Test just above the boundary where the sum of two smaller sides is greater
        // than the third
        assertEquals("scalene", triangleType.triangleType(2, 3, 4));
    }

    @Test
    public void testTriangleJustBelowBoundary() {
        // Test just below the boundary where the sum of two smaller sides is less than
        // the third
        assertEquals("isosceles", triangleType.triangleType(1, 2, 2));
    }

    @Test
    public void testTriangleWithLargeNumbers() {
        // Test with very large side lengths that form a triangle
        assertEquals("equilateral", triangleType.triangleType(100000, 100000, 100000));
    }

    @Test
    public void testTriangleLargeNumbersNotATriangle() {
        // Test with large numbers where the sum of two sides is exactly one more than
        // the third, hence not a triangle
        assertEquals("not a triangle", triangleType.triangleType(100000, 100000, 200001));
    }

    @Test
    public void testTriangleAllSidesEqualMinimal() {
        // Minimal positive case for an equilateral triangle
        assertEquals("equilateral", triangleType.triangleType(1, 1, 1));
    }
}
