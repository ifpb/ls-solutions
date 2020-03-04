var salario, imposto

salario = prompt('Salário: ')

switch(true) {
  case salario < 1903.98:
    imposto = 0;
    break
  case salario >= 1903.98 && salario < 2826.65:
    imposto = salario * (7.5/100) - 142.80;
    break
  case salario >= 2826.66 && salario < 3751.05:
    imposto = salario * (15.0/100) - 354.80;
    break
  case salario >= 3751.06 && salario < 4664.68:
    imposto = salario * (22.5/100) - 636.13;
    break
  default:
    imposto = salario * (27.5/100) - 869.36;
}

console.log(imposto)
