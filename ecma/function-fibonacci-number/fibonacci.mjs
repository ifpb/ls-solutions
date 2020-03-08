function fibonacci(number) {
    let numbera = 0;
    let numberb = 1;
    let numberc = 1;
  
    if (number > 1)
      while (number > 2) {
        numberc = numbera + numberb;
        numbera = numberb;
        numberb = numberc;
  
        number--;
      }
    else if (number == 1) return 0;
    else return undefined;
  
    return numberc;
  }
  
  export { fibonacci };
 