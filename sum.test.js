const sum = require('./sum');

test('adds 0+9 to equal 9', () => {
	expect(sum(0, 9)).toBe(9);
});

test('doesn\'t provide number as parameter a to throw error', () => {
	expect(() => {
		sum('zero', 9);
	}).toThrow('first parameeter is not number');
});

test('doesn\'t provide number as parameter b to throw error', () => {
	expect(() => {
		sum(0, 'nine');
	}).toThrow('2nd parameeter is not number');
});
