let j = 9, result = '';

for (let i = 99; i >= 0; i--) {
    if (i <= 9) result += '0' + i;
    else result += i

    if (j === 0) {
        result += '\n';
        j = 9;
    } else {
        result += ' ';
        j--;
    }   
}

console.log(result);