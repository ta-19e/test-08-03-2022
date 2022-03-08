const sum = require("./sum");

test("adds 1 + 7 to equal 8", () => {
  expect(sum(1, 2)).toBe(3)
  if (Number.isNaN(1)) {
    throw new Error("first parameeter is not number")
}
if (Number.isNaN(7)) {
    throw new Error("2nd parameeter is not number")
}
});