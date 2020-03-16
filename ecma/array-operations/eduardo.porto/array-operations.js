function sum(array) {
  array.reduce((x,y) => x + y, 0);
}

function product(array) {
  array.reduce((x,y) => x * y, 1);
}

function sumOdds(array) {
  array.filter(x => x % 2 != 0).reduce((x,y) => x + y, 0);
}

export { sum, product, sumOdds };
