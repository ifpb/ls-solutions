const salary = 3500;
let tax = 0, deduction = 0;

switch (true) {
    case salary > 4664.68:
        taxRate = 0.275;
        deduction = 869.36;
        break;
    case salary >= 3751.06:
        taxRate = 0.225;
        deduction = 636.13;
        break;
    case salary >= 2826.66:
        taxRate = 0.15;
        deduction = 354.80;
        break;
    case salary >= 1903.99:
        taxRate = 0.075;
        deduction = 142.80;
        break;
}

tax = salary * taxRate - deduction

console.log(`IRRF: ${tax}`);