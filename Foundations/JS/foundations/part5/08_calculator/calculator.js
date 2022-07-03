const add = function(operand1, operand2) {
    return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(arr) {
	return arr.reduce((result, num) => {
        return result + num;
    }, 0);
}

const multiply = function(arr) {
    if (arr.length < 2)
        throw 'Less than 2 operands';

    return arr.reduce((result, num) => {
        return result * num;
    }, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
    let result = num;

    if (num === 0 || num === 1)
        return 1;
    
    while (num-- > 1)
        result *= num;

    return result;
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
