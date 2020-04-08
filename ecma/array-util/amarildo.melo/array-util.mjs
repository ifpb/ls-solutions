/* Retorna o MENOR valor do array */
function min(array) {
  let min = array[0];

  for(let i of array){ 
    if(min > i){
      min = i;
    }
  }

  return min;
}


/* Retorna o MAIOR valor do array */
function max(array) {
  let max = array[0];

  for(let i of array){ 
    if(max < i){
      max = i;
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