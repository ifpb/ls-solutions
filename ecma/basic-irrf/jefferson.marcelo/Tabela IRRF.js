let salary = '9500'

if (salary <= 1903.98) {
  salary = salary  
}

else if (salary <= 2826.65 ){
  salary -= salary*0.075 + 142.80
}

else if (salary <= 3751.05 ){
  salary -= salary*0.15 + 354.80
}

else if (salary <= 4664.68 ){
  salary -= salary*0.225 + 636.13
}

else {
  salary -= salary*0.275 + 869.36
}

console.log(salary)