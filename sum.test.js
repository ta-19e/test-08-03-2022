const sum = require('./sum')

test("1 + 0 = 1", () => {
    expect(sum(1, 0)).toBe(1);
})

test("get error when invalid input", () => {
    expect(() => {
        sum("kass", 123)
    }).toThrow("first parameeter is not number")
})