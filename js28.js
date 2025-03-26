function sum(a, b) {
    return a + b;
}


function max(a, b) {
    return a > b ? a : b;
}


function factorial(n) {
    if (n < 0) return null; 
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


function greet(name) {
    console.log(`Привет, ${name}!`);
}


function double(num) {
    return num * 2;
}


function isPositive(num) {
    return num > 0;
}


function square(num) {
    return num * num;
}



function calculate(operation, num1, num2) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Ошибка: Деление на ноль.";
            }
            break;
        default:
            return "Ошибка: Неизвестная операция.";
    }

    return `Результат: ${result}`;
}


let operation = prompt("Выберите операцию (+, -, *, /):");
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));


let output = calculate(operation, num1, num2);
alert(output);