const salary = 3500;
let result;


if(salary <= 1903.98) {
    result = salary
}

else if (salary <= 2286.65) {
    result = salary * 0.075 - 142.80
}

else if (salary <= 3751.05) {
    result = salary * 0.150 - 354.80
}
    
else if (salary <= 4664.68) {
    result = salary * 0.225 - 636.13
}

else  {
    result = salary * 0.275 - 869.36 
}



console.log(" IRRF: " + result);

