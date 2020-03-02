const salary = 3500;
let result;

switch(true) {

    case (salary <=1903.98):
        result = salary
        break;
    
    case (salary <= 2286.65):
        result = salary * 0.075 - 142.80
        break;
    
    case (salary <=3751.05): 
        result = salary * 0.150 - 354.80
        break;

    
    case (salary <=4664.68):
        result = salary * 0.225 - 636.13
        break;

    case (salary > 4664.68):
        result = salary * 0.275 - 869.36
        break;
    
    default:
        console.log("Salario não informado.");

}

console.log(" IRRF: " + result);
