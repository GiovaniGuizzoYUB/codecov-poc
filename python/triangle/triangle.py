def triangle_type(a, b, c):
    """
    Determine the type of triangle based on the side lengths.

    Args:
    a (int): Length of the first side.
    b (int): Length of the second side.
    c (int): Length of the third side.

    Returns:
    str: Type of triangle: "equilateral", "isosceles", "scalene", or "not a triangle".
    """
    # Validate non-zero positive lengths
    if a <= 0 or b <= 0 or c <= 0:
        return "not a triangle"
    # Check if it can form a triangle
    if a + b <= c or a + c <= b or b + c <= a:
        return "not a triangle"
    # Determine the type of triangle
    if a == b == c:
        return "equilateral"
    if a == b or b == c or a == c:
        return "isosceles"
    return "scalene"
