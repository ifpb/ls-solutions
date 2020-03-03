// Alecsander Camilo - 20192370010

let fib = [0, 1];

function fibonnaciSequence(x) {
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

console.log(fibonnaciSequence(0));
console.log(fibonnaciSequence(1));
console.log(fibonnaciSequence(2));
console.log(fibonnaciSequence(4));
console.log(fibonnaciSequence(6));