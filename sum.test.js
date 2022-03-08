const sum = require('./sum');

test('0 + 7 should equal 7', () => {
  expect(sum(0, 7)).toBe(7);
});

test('"B" + 7 throw error', () => {
    expect(() => sum("B", 7).value()).toThrow(Error);
});