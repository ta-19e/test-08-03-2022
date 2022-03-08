const sum = require('./sum');

test('adds 0 + 5 to equal 5', () => {
  expect(sum(0, 5)).toBe(5);
});
