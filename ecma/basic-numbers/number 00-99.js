let result = ''
for (let number = 0; number < 100; number++){
    result += number <10 ? '0' + number : number;
    result += number % 10 === 9 ? '\n' : ' ';
}

console.log(result)