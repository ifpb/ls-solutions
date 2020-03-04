const weight = 60;
const height = 1.65;
let result;
if (weight/ height**2 <18.5){
    result = "Abaixo do Peso";
}
else if (weight/ height**2 <24.9){
    result = "Normal";
}
else if (weight/ height**2 < 29.9){
    result = "Acima do Peso";
}
else{
    result = "Obeso"
}
console.log("Peso:", result)