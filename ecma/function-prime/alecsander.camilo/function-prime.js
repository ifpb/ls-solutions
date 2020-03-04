// Alecsander Camilo - 20192370010

function isPrime(x) {
    if (x > 2) {
        for (let counter = 2; counter <= x; counter++) {
            if (x % counter === 0) {
                return false;
            } else {
                return true;
            }
        }
    } return true;
}


console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));