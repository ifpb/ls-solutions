var peso, altura, imc, situacao

peso = 60
altura = 1.73

imc = peso/(altura)**2

switch (true) {
  case imc < 18.5:
    situacao = 'Abaixo do peso'
    break

  case imc < 24.9 && imc > 18.5:
    situacao = 'Peso normal'
    break

  case imc < 29.9 && imc > 25:
    situacao = 'Excesso de peso'
    break

  default:
    situacao = 'Obesidade'
}

console.log(situacao)
