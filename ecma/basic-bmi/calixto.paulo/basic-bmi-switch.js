const weight = 70;
const height = 1.65;
let result;

const BMI = weight/(height**2)

switch(true){
    case (BMI < 18.5):
        result = 'underweight';
        break;
    case (BMI < 24.9):
        result = 'normal weight';
        break;
    case (BMI < 29.9):
        result = 'overweight';
        break;
    case (BMI > 29.9):
        result = 'obesity';
}

console.log('BMI:', BMI)
console.log('result:', result)