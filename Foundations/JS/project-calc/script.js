function add(operand1, operand2) {
    return operand1 + operand2;
};

function subtract(operand1, operand2) {
    return operand1 - operand2;
};

function multiply(operand1, operand2) {
    return operand1 * operand2;
};

function divide(operand1, operand2) {
    return operand1 / operand2;
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

function populate(e) {
    const displayValue = document.querySelector('.calc-display');

    if (displayValue.textContent.length === 9)
        return;
    
    if (displayValue.textContent === '0')
        displayValue.textContent = '';
    
    displayValue.textContent += e.target.textContent.trim();
}

const digitButtons = document.querySelectorAll('.calc-digit');
digitButtons.forEach(digitButton => 
    digitButton.addEventListener('click', populate)
);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => 
    document.querySelector('.calc-display').textContent = '0'
);
