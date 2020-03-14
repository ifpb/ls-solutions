function fibonacci(number) {
  
  let numbera = 0;
  let numberb = 1;
  let result = `${numbera}, ${numberb}`;
  let numberc;

  if (number > 1)
    while (number > 2) {
      numberc = numbera + numberb;
      numbera = numberb;
      numberb = numberc;

      number--;
      result += `, ${numberc}`;
    }
  else if (number == 1) return '0';
  else return '';

  return result;
}




export { fibonacci };
