// Alecsander Camilo - 20192370010

let number = [0, 1, 1, 2, 3, 5, 8];

function fibonnaciNumber(x) {
    if (x === 0) {
        return 'undefined';
    } else {
        return number[x - 1];
    }
}

export { fibonnaciNumber };