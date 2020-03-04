module.exports =  function fibonacci(number) {
    let numbera = 0;
    let numberb = 1;
    let temp = 1;
  
    if (number > 1)
      while (number > 2) {
        temp = numbera + numberb;
        numbera = numberb;
        numberb = temp;
  
        number--;
      }
    else if (number == 1) return 0;
    else return undefined;
  
    return temp;
  }
  
 