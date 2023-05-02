const add = function(number1, number2) {
    return number1 + number2;
};

const subtract = function(number1, number2) {
    return number1 - number2;
};

const multiply = function(number1, number2) {
    return number1 * number2;
};

const divide = function(number1, number2) {
    return number1 / number2;
};

let firstNumber;
let secondNumber;
let operator;

function operate(operator, number1, number2) {
    return operator(number1, number2);
};

//create variables for buttons and display
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number');
//on button click, display.textContent = 'whatever button was pressed'
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
    });
};

let displayValue = display.textContent;