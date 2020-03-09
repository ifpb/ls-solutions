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

export { isPrime };