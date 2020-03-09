// Alecsander Camilo - 20192370010

import { isPrime } from "../function-prime/alecsander.camilo/function-prime.mjs";

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

export { nthPrime }