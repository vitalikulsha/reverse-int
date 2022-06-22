module.exports = function reverse (n) {
    let result = [];
    Array.from(String(num)).forEach(n => result.unshift(n));
    return +result.join('');
}
