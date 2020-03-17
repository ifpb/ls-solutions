let altura = 1.50;
let peso = 60;

let bmiCalc = peso/altura ** 2;

if (bmiCalc < 18.5) {
    console.log("Underweight")
}   else if (bmiCalc >= 18.5){
    console.log("Normal Weigth")
}   else if (bmiCalc >= 25){
    console.log("Overweight")
}   else {
    console.log("Obesity!")
}
