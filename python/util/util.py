def util_function(a: int, b: int) -> str:
    if a < b:
        return "a < b"
    elif a > b:
        return "a > b"
    elif a + b == 2:
        return "a + b == 2"
    else:
        return "a === b"
