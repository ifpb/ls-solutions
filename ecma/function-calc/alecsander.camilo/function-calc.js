// Alecsander Camilo - 20192370010

function calculadora(x, y, z) {
    if (z == '+') {
        return x + y;
    } else if (z == '-') {
        return x - y;
    } else if (z == '*') {
        return x * y;
    } else {
        return x / y;
    }
}

console.log(calculadora(1, 1, '+'))
console.log(calculadora(1, 1, '-'))
console.log(calculadora(1, 1, '*'))
console.log(calculadora(1, 1, '/'))
