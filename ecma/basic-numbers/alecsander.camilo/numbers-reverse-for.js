// Alecsander Camilo - 20192370010

let result = '';

for (let counter = 99; counter >= 0; counter--) {
    if (counter < 10) {
        if (counter === 9) {
            result += '\n0' + counter + ' ';         // Tive que criar um inner loop para o 9 porquê não consegui de
        } else {                                     // forma alguma fazê-lo ficar na mesma linha ou com um leading 0.
            result += '0' + counter + ' ';
        }
    } 
    else if ((counter % 10 === 9) && (counter !== 99)) {
        result += '\n' + counter + ' ';
    } else {
        result += counter + ' ';
    }
}

console.log(result);