function sum(a, b) {
  if (isNaN(a)) {
    throw new Error('first parameeter is not a number')
  }
  if (isNaN(b)) {
    throw new Error('second parameeter is not a number')
  }
  return a + b
}

module.exports = sum
