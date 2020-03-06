let sequence = '';

for (let number = 0; number <= 99; number += 1) {
  const space = number % 10 === 9 ? '\n' : ' ';
  const value = number < 10 ? 0${number} : number;
  sequence += value + space;
}



let sequence1 = '';

for (let number1 = 99; number1 >= 0; number1 -= 1) {
  const space1 = number1 % 10 === 0 ? '\n' : ' ';
  const value1 = number1 < 10 ? 0${number1} : number1;
  sequence1 += value1 + space1;
}



let sequence2 = '';

for (let number2 = 99; number2 >= 0; number2 -= 2) {
  const space2 = number2 % 10 === 1 ? '\n' : ' ';
  const value2 = number2 < 10 ? 0${number2} : number2;
  sequence2 += value2 + space2;
}

console.log(sequence);
console.log("========");
console.log(sequence1);
console.log("========");
console.log(sequence2);