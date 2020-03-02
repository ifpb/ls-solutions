const weight = 60;
const height = 1.65;
let result;

const BMI = weight/(height**2)

if (BMI < 18.5){
    result = 'underweight'
}
else if(BMI < 24.9){
    result = 'normal weight'
}
else if(BMI < 29.9){
    result = 'overweight'
}
else{
    result = 'obesity'
}

console.log('BMI:', BMI)
console.log('result:', result)
