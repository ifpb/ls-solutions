let screen = '';

for (let number = 99; number >= 0; number -= 2) {
  const space = number % 10 === 1 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  screen += value + space;
}

console.log(screen);