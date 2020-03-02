// Alecsander Camilo - 20192370010

const size = 10;
let harmonic = 0;

for (let counter = 1; counter <= size; counter++) {
    harmonic += 1 / counter;
}

console.log(`H(${size}): ${harmonic}`)