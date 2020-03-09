function min(array) {
    let b = array[0]
    for (let flag = 1; flag < array.length; flag++){
        if(b > array[flag]){
            b = array[flag]
        }
    }
    return b
}
  
function max(array) {
    let b = array[0]
    for (let flag = 1; flag < array.length; flag++){
        if(b < array[flag]){
            b = array[flag]
        }
    }
    return b
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
    let a = [];
    for (let b = 0; b < arrays.length; b++) {
        let values = [];
        for (let array = 0; array < arrays.length; array++){
            values.push(arrays[array][b]);
        }
        a.push(values);
    }
    return a;
}
  
function uniq(array) {
    let a = [];
    for(let value of array){
        if(!a.includes(value)){
            a.push(value);
        }
    }
    return a;
}
  
function sortNum(array) {
    return array.sort((a, b) => a - b)
}
  
export { min, max, range, zip, uniq, sortNum };
  
  