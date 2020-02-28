let altura = parseFloat(prompt("Digite sua altura: "));
let peso = parseFloat(prompt("Digite seu peso: "));

let bmiCalc = peso/altura ** 2;

if (bmiCalc < 18.5){
    console.log("Underweight")
}   else if (bmiCalc >= 18.5){
    console.log("Normal Weigth")
}   else if (bmiCalc >= 25){
    console.log("Overweight")
}   else{
    console.log("Savio!!!")
}