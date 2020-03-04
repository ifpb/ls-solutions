function calc(num1, num2, sinal){
  switch(true) {
    case sinal == '+':
      return Number(num1) + Number(num2)
      break
    case sinal == '-':
      return num1 - num2
      break
    case sinal == '*':
      return num1 * num2
      break
   case sinal == '/':
      return num1 / num2
      break
  } 
}
