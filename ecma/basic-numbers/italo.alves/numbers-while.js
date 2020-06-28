let j = 0, i = 0, result = '';

while (i < 100) {
    if (i <= 9) result += '0' + i;
    else result += i

    if (j === 9) {
        result += '\n';
        j = 0;
    } else {
        result += ' ';
        j++;
    }

    i++;
}

console.log(result);