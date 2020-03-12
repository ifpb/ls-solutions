function sum(array) {
  let soma = 0;
  for (let value of array){
    soma += value;
  }
  return soma;
}

function product(array) {
  let product = 1;
  for (let value of array){
    product *= value;
  }
  return product;
}

function sumOdds(array) {
  let somaImpar = 0;
  for (let value of array) {
    if (value % 2){
      somaImpar += value;
    }
  }
  return somaImpar;
}

export { sum, product, sumOdds };
