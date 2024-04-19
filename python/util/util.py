def util_function(a: int, b: int) -> str:
    if a < b:
        return "a < b"
    elif a > b:
        return "a > b"
    elif a + b == 5:
        return "a + b == 5"
    elif a + b == 10:
        return "a + b == 10"
    else:
        return "a === b"
