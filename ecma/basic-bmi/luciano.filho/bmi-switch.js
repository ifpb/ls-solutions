const weight = 60;
const height = 1.65;
let result;
calc = weight /(height**2);
switch (true){
case calc < 18.5:
    result = "Abaixo do Peso";
    break;
case calc < 24.9:
    result = "Normal";
    break;
case calc < 29.9:
    result = "Acima do Peso";
    break;
case calc < 29.9:
    result = "Obeso";
    break;
}
console.log("Peso:", result)