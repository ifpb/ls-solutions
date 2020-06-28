function factorial(num){

    let cont = 0;
    let fatorial = 1;
    while(cont < num){
        cont += 1;
        fatorial *= cont;
    }
    return fatorial;
}

export { factorial };