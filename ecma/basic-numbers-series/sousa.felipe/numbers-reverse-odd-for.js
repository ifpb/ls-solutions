let result = '';

for (let flag = 99; flag > 0; flag -= 2){
    result += flag < 10 ? '0' + flag : flag;
    result += flag % 10 === 1 ? '\n' : ' ';
}

console.log(result)