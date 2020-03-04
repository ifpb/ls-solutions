const salary = 3500;
let taxrates = [0, 7.5, 15, 22.5, 27.5];
let deductions = [0, 142.80, 354.80, 636.13, 869.36]
// TODO

switch (true){
    case salary <= 1903.98:
        taxRate = taxrates[0];
        deduction = deductions[0];
        break;
    case salary <= 2826.65:
        taxRate = taxrates[1];
        deduction = deductions[1];
        break;
    case salary <= 3751.05:
        taxRate = taxrates[2];
        deduction = deductions[2];
        break;
    case salary <= 4664.68:
        taxRate = taxrates[3];
        deduction = deductions[3];
        break;
    case salary > 4664.68:
        taxRate = taxrates[4];
        deduction = deductions[4];
        break;
}

tax = (salary/100) * taxRate - deduction

// Output:

console.log("IRRF:",tax)

//  IRRF: 170.2