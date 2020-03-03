var result=''
for (var number=99; number >= 0; number -= 2){
    result += number < 10 ? '0' + number : number;
    result += number % 10 === 1 ? '\n' : ' ';
}

console.log(result)