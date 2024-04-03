import { testUtilFunction } from "./utils";

test("test util function 1", () => {
  const result = testUtilFunction(1, 2);
  expect(result).toBe("a < b");
});

test("test util function 2", () => {
  const result = testUtilFunction(2, 1);
  expect(result).toBe("a > b");
});

test("test util function 3", () => {
  const result = testUtilFunction(1, 1);
  expect(result).toBe("a === b");
});
