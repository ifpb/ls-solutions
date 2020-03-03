// Alecsander Camilo - 20192370010

function factorial(x) {
    
    let resultado = 1;

    if ((x === 1) || (x === 0)) {
        return resultado;
    } else {
        for (let number = x; number > 1; number--) {
            resultado *= number;
    }
        return resultado;
  }
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))