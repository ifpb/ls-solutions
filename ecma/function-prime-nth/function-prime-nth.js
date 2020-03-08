// Alecsander Camilo - 20192370010

function isPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (let counter = x - 1; counter > 1; counter--) {
        if (x % counter === 0) {
            return false;
         }
   } return true;
}

function nthPrime(n) {
    let counter = 0;
    for (let number = 0; counter <= n; number++) {
      if (isPrime(number)) {
        counter += 1;
      }
      if (counter === n) {
        return number;
     }
   }
}

console.log(nthPrime(4))
console.log(nthPrime(6))