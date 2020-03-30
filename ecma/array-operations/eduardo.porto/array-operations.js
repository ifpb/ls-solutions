function sum(array) {
  return array.reduce((x,y) => x + y, 0);
}

function product(array) {
  return array.reduce((x,y) => x * y, 1);
}

function sumOdds(array) {
  return array.filter(x => x % 2 != 0).reduce((x,y) => x + y, 0);
}

export { sum, product, sumOdds };
