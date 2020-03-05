let cont = 0, resultado = '',  num;

for (i=0; i<100; i++) {
  num = (i<10) ? num = '0' + i : num = i
  resultado +=num

  if (cont != 9) {
    resultado += ' '
    cont += 1
  }
  else {
    resultado += '\n'
    cont = 0
  }
}
console.log(resultado)
