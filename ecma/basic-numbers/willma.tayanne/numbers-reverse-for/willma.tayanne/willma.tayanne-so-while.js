let number = 100;
let result = '';

do {

    number -= 1;

    const space = number % 10 === 0 ? '\n' : ' ';
    const value = number < 10 ? `0${number}` : number;
    result += value + space;

}

while (number >= 0) 
  
  console.log(result);