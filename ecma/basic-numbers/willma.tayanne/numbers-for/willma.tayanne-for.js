let screen = '';

for (let number = 0; number <= 99; number += 1) {
  const space = number % 10 === 9 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  screen += value + space;
}

console.log(screen);