function sum(a, b) {
  if (isNaN(a)) {
    throw new Error('first parameter is not number');
  }
  if (isNaN(b)) {
    throw new Error('second parameter is not number');
  }
  return a + b;
}

module.exports = sum;
