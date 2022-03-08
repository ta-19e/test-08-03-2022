const sum = require("./sum")

test("1 + 4 = 5", () => {
    expect(sum(1,4).toBe(5));
})