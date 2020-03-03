// Alecsander Camilo - 20192370010

function fibonnaciNumber(x) {
    
    let number = [0, 1, 1, 2, 3, 5, 8]

    if (x === 0) {
        return 'undefined';
    } else if (x === 1) {
        return number[0];
    } else if (x === 2) {
        return number[1]
    } else if (x === 3) {
        return number[2];
    } else if (x === 4) {
        return number[3];
    } else if (x === 5) {
        return number[4];
    } else if (x === 6) {
        return number[5];
    }
}

console.log(fibonnaciNumber(0))
console.log(fibonnaciNumber(1))
console.log(fibonnaciNumber(2))
console.log(fibonnaciNumber(4))
console.log(fibonnaciNumber(6))