const weight = 200; height = 1.5
const BMI = weight / (height ** 2)
let result;

if (BMI < 18.5){
    result = 'Underweight'
}else if (BMI < 24.9){
    result = 'Normal weight'
}else if (BMI < 29.9){
    result = 'Overweight'
}else{
    result = `Obesity`
}

console.log(`${result}`)







