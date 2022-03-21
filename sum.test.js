const sum = require('./sum.js');

test('0 + 1 = 1', () => {
  expect(sum(0, 1)).toBe(1);
});
test('cannot add strings to numbers', () => {
  expect(() => { sum('mingi süna', 1); }).toThrow();
});
