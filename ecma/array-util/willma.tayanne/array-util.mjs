function min(array) {
  let minResult = array[0];

  for (let number = 1; number < array.length; number++) {
    if (minResult > array[number]) minResult = array[number];
  }

  return minResult;
}

function max(array) {
  let maxResult = array[0];

  for (let number of array) {
    if (maxResult < number) maxResult = number;
  }

  return maxResult;
}

function range(length, last, step) {
  let begin = last ? length : 0;
  let end = last || length;
  step = step || 1;
  let result = [];

  for (let number = begin; number < end; number += step) {
    result.push(number);
  }

  return result;
}

function zip(...arrays) {
  let result = [];
  for (let start = 0; start < arrays.length; start++) {
    let values = [];
    for (let array = 0; array < arrays.length; array++) values.push(arrays[array][start]);
    result.push(values);
  }
  return result;
}

function uniq(array) {
  let result = [];
  for (let number of array) {
    if (!result.includes(number)) result.push(number);
  }
  return result;
}

function sortNum(array) {
  return array.sort((numbera, numberb) =>numbera - numberb);
}

export { min, max, range, zip, uniq, sortNum };
