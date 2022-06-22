module.exports = function reverse (n) {
    let result = [];
    Array.from(String(Math.abs(n))).forEach(num => result.unshift(num));
    if(n < 0){
      result.unshift('-');
    }
    return Number(result.join(''));
}
