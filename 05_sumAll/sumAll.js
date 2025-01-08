const sumAll = function (...args) {
    let sum = 0
    let areIntegers = args.every(num => Number.isInteger(num))
    let hasNegative = args.some(num => num < 0)
    if (!hasNegative && areIntegers) {
        
        for (let i = Math.min(...args); i <= Math.max(...args); i++) {

            sum += i
        }
    } else {
        return 'ERROR'
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;

