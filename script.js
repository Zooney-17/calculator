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