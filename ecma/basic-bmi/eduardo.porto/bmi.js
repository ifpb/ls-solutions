const peso = 55, altura = 1.70;
let resultado;

const bmi = peso/altura**2;

if (bmi < 18.5) {
  resultado = "Abaixo do peso";
} else if (bmi < 24.9) {
  resultado = "Peso normal";
} else if (bmi < 29.9) {
  resultado = "Acima do peso";
} else {
  resultado = "Obesidade";
}

console.log(resultado);
