let tax
let salary = 3000
if(salary < 1903.98){
    tax = 0
}
else if(salary < 2826.65){
    tax = salary*0.075-142.80
}
else if(salary < 3751.05){
    tax = salary*0.15-354.80
} 
else if(salary < 4664.68){
    tax = salary*0.225-636.13
}
else{
    tax = salary*0.275-869.36
}
console.log(tax)