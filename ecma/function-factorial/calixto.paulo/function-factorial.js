function factorial(valor){
    let acumula = 1;
    for(let x = valor; x > 1; x--) {
    acumula = acumula * x;
    }
    return acumula;
}
console.log(factorial(1))