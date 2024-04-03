from .util import util_function
import pytest


# def test_util_function_1():
#     result = util_function(1, 2)
#     assert result == "a < b", "Test case where a is less than b failed."


def test_util_function_2():
    result = util_function(2, 1)
    assert result == "a > b", "Test case where a is greater than b failed."


def test_util_function_3():
    result = util_function(1, 1)
    assert result == "a === b", "Test case where a is equal to b failed."
