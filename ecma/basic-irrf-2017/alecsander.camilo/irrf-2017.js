// Alecsander Camilo - 20192370010

const salary = 3500;
let taxRate = 0;
let deduction = 0;

if (salary > 4664.68) {
    taxRate = 0.275;
    deduction = 869.36;
} else if (salary >= 3751.06) {
    taxRate = 0.225;
    deduction = 636.13;
} else if (salary >= 2826.66) {
    taxRate = 0.15;
    deduction = 354.80;
} else if (salary >= 1903.99) {
    taxRate = 0.075;
    deduction = 142.80;
}

tax = (salary * taxRate) - deduction

console.log(`IRRF: ${tax}`)