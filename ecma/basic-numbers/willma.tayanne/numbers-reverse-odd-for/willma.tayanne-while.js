let number = 101;
let result = '';

while (number >= 0) {
    number -= 2;

    const space = number % 10 === 1 ? '\n' : ' ';
    const value = number < 10 ? `0${number}` : number;
    result += value + space;
    
  }
  console.log(result);