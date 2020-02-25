let result = '';
for (let number = 0; number < 100; number++) {
  result += number < 10 ? '0' + number : number;
  result += number % 10 === 9 ? '\n' : ' ';
}
console.log(result)

result = '';
for (let number = 99; number > -1; --number) {
  result += number < 10 ? '0' + number : number;
  result += number % 10 === 0 ? '\n' : ' ';
}
console.log(result)

result = '';
for (let number = 99; number > -1; number % 2 == 0 ) {
  result += number < 10 ? '0' + number : number;
  result += number % 10 === 0 ? '\n' : ' ';
}
console.log(result)
