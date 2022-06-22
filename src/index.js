module.exports = function reverse (n) {
    let result = [];
    Array.from(String(Math.abs(n))).forEach(num => result.unshift(num));
    return Number(result.join(''));
}
