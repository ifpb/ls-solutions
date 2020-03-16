function sum(array) {
  
  let sum = 0;
  return array.reduce((a,b) => a+b);

}

function product(array) {
  
  let sumOdds = 1;
  return array.reduce((a,b) => a*b)

}

function sumOdds(array) {
  
  let sumOdds = 0;
  return array.reduce((a,b) => (a+b) % 2);

}

export { sum, product, sumOdds };
