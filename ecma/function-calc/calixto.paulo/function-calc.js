function calc(numero1,numero, op){
    switch(true){
        case(op == '+'):
        return numero1+numero;
        break;
        case(op == '-'):
        return numero1-numero;
        break;
        case(op == '*'):
        return numero1*numero;
        break;
        default:
        return numero1/numero
    }
}
export{calc}