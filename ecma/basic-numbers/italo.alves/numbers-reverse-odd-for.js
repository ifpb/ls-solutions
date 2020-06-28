let j = 9, result = '';

for (let i = 99; i >= 0; i--) {
    if (i <= 9 && i%2) result += '0' + i;
    else if (i%2) result += i

    if (j === 0) {
        result += '\n';
        j = 9;
    } else {
        result += ' ';
        j--;
    }   
}

console.log(result);