const weigth = 60;
const height = 1.65;
let result;

bmi = weigth / (height**2);

switch(bmi > 0){
    case (bmi < 18.5):
        result = "Underweight";
    break;
    case (bmi >= 18.5 && bmi <= 24.9):
        result = "Normal weight	";
    break;
    case (bmi > 24.9 && bmi <= 29.9):
        result = "Overweight";
    break;
    case (bmi > 29.9):
        result = "Obesity";
    break;
    default:
        result = "Algo deu errado!";
}

console.log("BMI: " + bmi + "\nResult: " + result);