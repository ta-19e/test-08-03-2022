const sum = require("./sum")

test("1 + 4 = 5", () => {
    expect(sum(1, 4)).toBe(5);
})

test("hello + 1 throws exception", () => {
    expect(() => sum("hello", 1)).toThrow("first parameeter is not number");
})