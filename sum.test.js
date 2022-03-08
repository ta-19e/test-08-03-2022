const sum = require("./sum");

test("1 + 5 = 6", () => {
  expect(sum(1, 5)).toBe(6);
});
test("cannot add strings to numbers", () => {
  expect(() => { sum("word", 6); }).toThrow();
});
