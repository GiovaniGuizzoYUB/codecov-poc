export function testUtilFunction(a: number, b: number) {
  if (a < b) {
    return "a < b";
  } else if (a > b) {
    return "a > b";
  } else if (a + b === 5) {
    return "a + b == 5";
  } else if (a + b === 10) {
    return "a + b == 10";
  } else {
    return "a === b";
  }
}
