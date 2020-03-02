// Alecsander Camilo - 20192370010

let result = '';

for (let counter = 0; counter < 100; counter++) {
    if (counter < 10) {
        result += '0' + counter + ' ';
    } else if (counter % 10 === 0) {
        result += '\n' + counter + ' ';
    } else {
        result += counter + ' ';
    }
}

console.log(result);