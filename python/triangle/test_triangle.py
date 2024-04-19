from .triangle import triangle_type
import pytest


def test_triangle_with_zero_length():
    # Edge case with zero side length
    assert (
        triangle_type(0, 1, 1) == "not a triangle"
    ), "Test with zero side length failed"


def test_triangle_with_negative_length():
    # Edge case with negative side length
    assert (
        triangle_type(-1, 1, 1) == "not a triangle"
    ), "Test with negative side length failed"


def test_triangle_with_sides_equal_to_boundary():
    # Test where the sum of two sides equals the third
    assert (
        triangle_type(1, 2, 3) == "not a triangle"
    ), "Test with sides equal to boundary failed"


def test_triangle_just_above_boundary():
    # Test just above the boundary where the sum of two smaller sides is greater than the third
    assert triangle_type(2, 3, 4) == "scalene", "Test just above boundary failed"


def test_triangle_just_below_boundary():
    # Test just below the boundary where the sum of two smaller sides is less than the third
    assert triangle_type(1, 2, 2) == "isosceles", "Test just below boundary failed"


def test_triangle_with_large_numbers():
    # Test with very large side lengths that form a triangle
    assert (
        triangle_type(100000, 100000, 100000) == "equilateral"
    ), "Test with large numbers that form a triangle failed"


def test_triangle_large_numbers_not_a_triangle():
    # Test with large numbers where the sum of two sides is exactly one more than the third, hence not a triangle
    assert (
        triangle_type(100000, 100000, 200001) == "not a triangle"
    ), "Test with large numbers that do not form a triangle failed"


def test_triangle_all_sides_equal_minimal():
    # Minimal positive case for an equilateral triangle
    assert (
        triangle_type(1, 1, 1) == "equilateral"
    ), "Minimal equilateral triangle test failed"
