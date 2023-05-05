const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

function divide(a, b) {
    if (b === 0) {
        return 'yeah right, lmao';
    } else {
        return a/b;
    }
}

let firstNumber;
let secondNumber;
let operator;
let displayValue;
let temp;

function operate(operation, firstNumber, secondNumber) {
    if (operation === '+') {
        return add(firstNumber, secondNumber);
    } else if (operation === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operation === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operation === '÷') {
        return divide(firstNumber, secondNumber);
    };
};

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') display.textContent = '';
        if (firstNumber) {
            temp = firstNumber;
            firstNumber = undefined;
            display.textContent = '';
        }
        display.textContent += button.textContent;
    });
});

const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const computations = document.querySelectorAll('.operator');

computations.forEach((computation) => {
    computation.addEventListener('click', () => {
        firstNumber = display.textContent;
        operator = computation.textContent;
    });
});

equals.addEventListener('click', () => {
    secondNumber = display.textContent;
    firstNumber = temp;
    display.textContent = `${operate(operator, Number(firstNumber), Number(secondNumber))}`;
});

clear.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    displayValue = undefined;
    temp = undefined;
})
