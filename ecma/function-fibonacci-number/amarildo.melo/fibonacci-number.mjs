function fibonacci(number) {

    let inicial, atual = 0, proximo = 1 ;

    if(number == 0){
        return inicial;
    }else if(number == 1){
        return 0;        
    }else if(number == 2 || number == 3){
        return 1;
    }else{
        for(let i = 2; i < number; i++){
            inicial = atual + proximo;
            atual = proximo;
            proximo = inicial;                 
        }
        return inicial;
    }
    
}
  
export { fibonacci };
//função para calcular o número da sequencia de Fibonacci em uma posição N.