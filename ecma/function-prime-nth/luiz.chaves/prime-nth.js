import { isPrime } from "../../function-prime/luiz.chaves/prime.js";

/**
 * begin: 1..n
 * end: 1..n, end > begin
 */
function nthPrime(nth) {
  let result = 2;

  for (let number = 3, count = 1; count < nth; number++) {
    if (isPrime(number)) {
      result = number;
      count++;
    }
  }

  return result;
}

export { nthPrime };
