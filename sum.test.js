const sum = require('./sum');

test('0 + 7 should equal 7', () => {
  expect(sum(0, 7)).toBe(7);
});

test('b + 7 throw error', () => {
    expect((sum(b, 7)).value()).toThrowError(Error);
});