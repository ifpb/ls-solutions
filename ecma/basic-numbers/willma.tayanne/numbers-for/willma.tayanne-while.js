let number = -1;
let result = '';

while (number < 99) {
    number += 1;

    const space = number % 10 === 9 ? '\n' : ' ';
    const value = number < 10 ? `0${number}` : number;
    result += value + space;
    
  }
  console.log(result);