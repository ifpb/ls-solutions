function min(array) {
  let minimun = array.shift();
  for (const value of array){
    if (value < minimun){
      minimun = value
    }
  }
  return minimun
}

function max(array) {
  let maximun = array.shift();
  for (const value of array){
    if (value > maximun){
      maximun = value
    }
  }
  return maximun
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
