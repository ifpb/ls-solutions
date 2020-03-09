// Alecsander Camilo - 20192370010

let fib = [0, 1];

function fibonacciSequence(x) {
    if (x === 0) {
        return '';
    } else if (x === 1) {
        return 0;
    } else {
        for (let number = 2; number <= x; number++) {
            fib[number] = fib[number - 2] + fib[number - 1];
    }  
        return fib.slice(0, -1).join(', ');
    }
}

export { fibonacciSequence };