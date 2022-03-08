const sum = require('./sum');

test('adds 1 + 5 to equal 6', () => {
    a = 1,
    b = 5,
  expect(sum(a, b)).toBe(6);
if (isNaN(a)) {
    throw new Error("first parameeter is not number")
}
if (isNaN(b)) {
    throw new Error("2nd parameeter is not number")
}
});