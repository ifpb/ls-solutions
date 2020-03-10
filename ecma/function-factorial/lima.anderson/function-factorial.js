function fatorial(numero) {
  if (numero==0){
    return 1
  } else {
    let r = 1
    for (i=numero; i>0; i--){
      r*=i
    }
    return r
  }
}
