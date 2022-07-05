const add = function(operand1, operand2) {
    return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
    return operand1 - operand2;
};

const multiply = function(arr) {
    if (arr.length < 2)
        throw 'Less than 2 operands';

    return arr.reduce((result, num) => {
        return result * num;
    }, 1);
};

function operate(operator, operand1, operand2) {
    if (operator === '+')
        return add(operand1, operand2);
    else if (operator === '-')
        return subtract(operand1, operand2);
    else if (operator === '*')
        return multiply(operand1, operand2);
    else if (operator === '/')
        return divide(operand1, operand2);
}