var peso, altura, imc

peso = 60
altura = 1.73

imc = peso/(altura)**2

if  (imc < 18.5) {
  console.log('Abaixo do peso')
}
else if (imc < 24.9 && imc > 18.5) {
  console.log('Peso normal')
}
else if (imc < 29.9 && imc > 25) {
  console.log('Excesso de peso')
}
else if (imc >= 30){
  console.log('Obesidade')
}
