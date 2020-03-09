// Alecsander Camilo - 20192370010

function min(array) {
    let minimum = array[0];
    for (const value of array) {
      if (value < minimum) minimum = value;
    }
    return minimum;
}
    
function max(array) {
    let maximum = array[0];
    for (let value of array) {
        if (value > maximum) {
            maximum = value;
        }
    }
    return maximum;
}
    
function range(length, last, step) {
    let inicio = last ? length : 0;
    let fim = last || length;
    step = step || 1;
    let resultado = [ ];

    for (let counter = inicio; counter < fim; counter += step) {
        resultado.push(counter);
    }
    return resultado;
}
    
function zip(...arrays) {
      // TODO
}
    
function uniq(array) {
    let resultado = [ ];
    for (let value of array) {
        if (!resultado.includes(value)) {
            resultado.push(value)
        }
    }
    return resultado
}
    
function sortNum(array) {
      // TODO
}
    
export { min, max, range, zip, uniq, sortNum };