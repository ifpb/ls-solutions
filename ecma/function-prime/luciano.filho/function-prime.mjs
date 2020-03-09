function function_prime(a) {
  div = 0;
  for (cont = 0;cont <= a; cont += 1){
    if (a % cont == 0){
      div = div + 1;
    }
  }
  if (div == 2){
    result = true;
  }
  else{
    result = false;
  }
  return result;
}

//module.exports = function_prime;
export { function_prime };
