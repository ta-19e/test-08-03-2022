const sum = require('./sum');

test('adds 0 + 4 to equal 4', () => {
  expect(sum(0, 4)).toBe(4);
});