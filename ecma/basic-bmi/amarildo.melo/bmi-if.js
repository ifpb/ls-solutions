const weigth = 60;
const height = 1.65;
let result;

result = weigth / (height**2);

console.log("BMI: " + result);

if(result < 18.5){
    console.log("Result: Underweight");
}else if(result <= 24.9){
    console.log("Result: Normal weight	");
}else if(result <= 29.9){
    console.log("Result: Overweight	");
}else if(result >= 30){
    console.log("Result: Obesity");
}