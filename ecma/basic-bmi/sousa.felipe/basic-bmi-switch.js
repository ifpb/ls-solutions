const weight = 200
const height = 1.5
const BMI = weight / (height ** 2)
let result;

switch (true){
    case (BMI < 18.5):
        result = 'Underweight'
        break;
    case (BMI < 24.9):
        result = 'Normal weight'
        break;
    case (BMI < 29.9):
        result = 'Overwight'
        break;
    case (BMI >= 30):
        result = 'Obesity'
        break;
}
console.log(result)