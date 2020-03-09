// Alecsander Camilo - 20192370010

let resultado = 1;

function factorial(x) {
    if ((x === 1) || (x === 0)) {
        return resultado;
    } else {
        for (let number = x; number >= x; number--) {
            resultado *= number;
    }
            return resultado;
    }
}

export { factorial };