const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Calculator() {
    this.add = function(a, b) {
        return a + b;
    };

    this.subtract = function(a, b) {
        return a - b;
    };

    this.multiply = function(a, b) {
        return a * b;
    };

    this.divide = function(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
}

const calculator = new Calculator();

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
            let result;
            switch(operation) {
                case 'add':
                    result = calculator.add(Number(firstNumber), Number(secondNumber));
                    break;
                case 'subtract':
                    result = calculator.subtract(Number(firstNumber), Number(secondNumber));
                    break;
                case 'multiply':
                    result = calculator.multiply(Number(firstNumber), Number(secondNumber));
                    break;
                case 'divide':
                    result = calculator.divide(Number(firstNumber), Number(secondNumber));
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});