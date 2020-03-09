function min(array) {
  let result_min = array.shift();
  for (const value of array){
    if (value < result_min){
      result_min = value
    }
  }
  return result_min;
}

function max(array) {
  return Math.max(...array);
}

function range(length, last, step) {
  
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
