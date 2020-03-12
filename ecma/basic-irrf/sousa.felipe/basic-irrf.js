const salario = 5000;
let taxrate = 0;
let deduction = 0;

if (salario > 4664.68){
    taxRate = 0.275;
    deduction = 869.36;
}else if (salario >= 3751.06){
    taxRate = 0.225;
    deduction = 636.13;
}else if (salario >= 2826.66){
    taxRate = 0.15
    deduction = 354.80
}else if (salario >= 1903.99){
    taxRate = 0.075
    deduction = 142.80
}


tax = (salario * taxRate) - deduction

console.log(`${tax}`)