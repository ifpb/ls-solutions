let result=''
for (var number = 99; number >= 0 ; number--){
    result += number < 10 ? '0' + number : number;
    result += number % 10 === 0 ? '\n' : ' ';
}

console.log(result)