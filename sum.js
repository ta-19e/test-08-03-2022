function sum(a, b) {
    if (Number.isNaN(a)) {
        throw new Error("first parameeter is not number")
    }
    if (Number.isNaN(b)) {
        throw new Error("2nd parameeter is not number")
    }
    return a + b;
}

module.exports = sum