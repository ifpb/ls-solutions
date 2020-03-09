function min(array) {
  let min = array[0];
  for (let value of array) {
    if (value < min){
      min = value;
    }
  }
  return min;
}

function max(array) {
  let max = array[0];
  for (let value of array){
    if (value > max){
      max = value;
    }
  }
  return max;
}

function range(length, last, step) {
  // TODO
}

function zip(...arrays) {
  // TODO
}

function uniq(array) {
  // TODO
}

function sortNum(array) {
  // TODO
}

export { min, max, range, zip, uniq, sortNum };
