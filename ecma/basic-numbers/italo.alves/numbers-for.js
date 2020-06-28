let j = 0, result = '';

for (let i = 0; i < 100; i++) {
    if (i <= 9) result += '0' + i;
    else result += i

    if (j === 9) {
        result += '\n';
        j = 0;
    } else {
        result += ' ';
        j++;
    }   
}

console.log(result);