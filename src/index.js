module.exports = function reverse (n) {
    let result = [];
    Array.from(String(n)).forEach(num => result.unshift(num));
    return +result.join('');
}
