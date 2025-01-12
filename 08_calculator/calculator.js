const add = function (...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[i]

  }
  return sum
};

const subtract = function (...args) {
  return args[0] - args[1]
};

const sum = function (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
};

const multiply = function (array) {
  let multiply = 1
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i]

  }
  return multiply
};

const power = function (...args) {
  return args[0] ** args[1]
};

const factorial = function (n) {
  if (n === 0) {
    return 1
  } else {
    let factorial = 1
    for (let i = n; i >= 1; i--) {
      factorial *= i
      
    }
return factorial
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};





