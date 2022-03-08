const sum = require('./sum');

'';

test('adds 0 + 6 to equal 6', () => {
  expect(sum(0, 6)).toBe(6);
});

test('"0" + 6 should throw error ', () => {
  expect(() => sum('0', 6).value()).toThrowError(Error);
});
