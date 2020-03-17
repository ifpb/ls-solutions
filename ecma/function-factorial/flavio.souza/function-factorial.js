function fatorial(numero) {
    if (numero) return numero * factorial(numero - 1);
    else return 1;
  }

export { fatorial }