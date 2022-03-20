const sum = require('./sum')

test('adds 1 + 6 to equal 7', () => {
  expect(sum(1, 6)).toBe(7)
})

test('1st parameter being string throws exception', () => {
  expect(() => sum('pelmeen', 6)).toThrow('first parameeter is not a number')
})

test('2nd parameter being string throws exception', () => {
  expect(() => sum(1, 'pelmeen')).toThrow('second parameeter is not a number')
})
