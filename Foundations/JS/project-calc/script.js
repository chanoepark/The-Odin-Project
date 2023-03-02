let operand1 = null;

function round(num) {
    let decimalIndex = num.toString().indexOf('.');

    if (decimalIndex < 0)
        return num
    
    return +num.toFixed(8 - decimalIndex - 1);
}

function add(operand1, operand2) {
    return round(operand1 + operand2);
}

function subtract(operand1, operand2) {
    return round(operand1 - operand2);
}

function multiply(operand1, operand2) {
    return round(operand1 * operand2);
}

function divide(operand1, operand2) {
    return round(operand1 / operand2);
}

function checkDecimal(displayValue) {
    if (displayValue.textContent.indexOf('.') < 0)
        displayValue.classList.remove('decimal');
    else
        displayValue.classList.add('decimal');
}

function isOperatorSelected() {
    return document.getElementsByClassName('selected').length === 1;
}

function getDisplayValue() {
    return document.querySelector('.calc-display');
}

function operate(operator, operand1, operand2) {
    let result = 0;
    const displayValue = getDisplayValue();
    
    if (operator === '+')
        result = add(operand1, operand2);
    else if (operator === '-')
        result = subtract(operand1, operand2);
    else if (operator === 'x')
        result = multiply(operand1, operand2);
    else if (operator === '/') {
        if (operand2 === 0) {
            displayValue.textContent = 'Div by 0';
            return 0;
        } else
            result = divide(operand1, operand2);
    }
    
    displayValue.textContent = result;
    displayValue.classList.add('result');
    checkDecimal(displayValue);

    return result;
}

function populate(e) {
    const inputValue = e.target.textContent.trim();
    const displayValue = getDisplayValue();
    const operatorSelected = isOperatorSelected;
    const isResult = document.getElementsByClassName('result');
    const hasDecimal = document.getElementsByClassName('decimal');
    
    if (inputValue === '.') {
        if (hasDecimal.length === 1)
            return;
        displayValue.classList.add('decimal');
    } else {
        if (displayValue.textContent.startsWith('0')
            || displayValue.textContent === 'Div by 0'
            || (operatorSelected
                && parseFloat(displayValue.textContent) === operand1)
            || isResult.length === 1)
                displayValue.textContent = '';
        
        if (displayValue.textContent.length === 8)
            return;
        
        if (operatorSelected)
            displayValue.classList.add('second-operand');
        
        if (isResult.length === 1)
            isResult.item(0).classList.remove('result');
        
        checkDecimal(displayValue);
    }
    
    displayValue.textContent += inputValue;
}

const digitButtons = document.querySelectorAll('.calc-digit');
digitButtons.forEach(digitButton => 
    digitButton.addEventListener('click', populate)
);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const displayValue = getDisplayValue();
    const operatorSelected = document.getElementsByClassName('selected');
    
    displayValue.textContent = '0';
    displayValue.classList.remove('result', 'decimal');

    if (operatorSelected.length === 1)
        operatorSelected.item(0).classList.remove('selected');
});

const plusMinusButton = document.querySelector('#plus-minus');
plusMinusButton.addEventListener('click', () => {
    const displayValue = getDisplayValue();
    if (displayValue.textContent === '0')
        return;
    
    displayValue.textContent = displayValue.textContent.startsWith('-')
                                ? displayValue.textContent.slice(1)
                                : '-'.concat(displayValue.textContent)
    
    if (isOperatorSelected() && !displayValue.classList.contains('second-operand'))
        operand1 *= -1;
})

const operatorButtons = document.querySelectorAll('.calc-operator');
operatorButtons.forEach(operatorButton => 
    operatorButton.addEventListener('click', e => {
        const displayValue = getDisplayValue();
        if (displayValue.textContent === 'Div by 0')
            return 0;
        
        if (isOperatorSelected())
            return;
        
        operand1 = parseFloat(displayValue.textContent);
        e.target.classList.add('selected');
    })
);

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    const secondOperand = document.getElementsByClassName('second-operand');

    if (secondOperand.length !== 1)
        return;
    
    const operator = document.getElementsByClassName('selected').item(0);
    const operand2 = parseFloat(getDisplayValue().textContent);

    operator.classList.remove('selected');
    secondOperand.item(0).classList.remove('second-operand');
    operand1 = operate(operator.textContent.trim(), operand1, operand2);
});