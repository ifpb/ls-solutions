function calculadora(o1, o2, operador) {
    switch (operador) {
      case '+':
        return parseInt(o1) + parseInt(o2);
      case '-':
        return o1 - o2;
      case '*':
        return o1 * o2;
      case '/':
        return o1 / o2;
    }
  }

export { calc }