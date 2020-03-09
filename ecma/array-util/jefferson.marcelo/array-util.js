function min(array) {
  let minimum = array.shift()
  for (const value of array) {
    if (value < minimum){
      minimum = value
    }
  }
  return minimum
}

function max(array) {
  return Math.max(...array)
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
