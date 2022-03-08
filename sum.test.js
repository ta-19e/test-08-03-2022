const sum = require('./sum')

test('0 + 7 should = 7', () =>{
    expect(sum (0, 7)).toBe(7);
});