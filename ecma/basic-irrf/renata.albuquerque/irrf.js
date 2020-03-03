const salary = 3500;
let tax;

if (salary < 1903.99){
    tax = 0;
} else if (salary < 2826.66){
    tax = 0.075 * salary - 142.8;
} else if (salary < 3751.06){
    tax = 0.15 * salary - 354.8;
} else if (salary < 4664.68){
    tax = 0.225 * salary - 636.13
} else{
    tax = 0.275 * salary - 869.36
}

console.log(tax)