function fatorial (number)  {
    if (number) return number * fatorial(number - 1); 
    else return 1;
  }
console.log(fatorial(5))