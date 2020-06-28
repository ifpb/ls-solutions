function calc(num1, num2, op){
    switch(op){
        case'+':
            return num1 + num2;
        break;
        case'-':
            return num1 - num2;
        break;
        case'*':
            return num1 * num2;
        break;
        case'/':
            return num1 / num2;
        break;
    }
}

export { calc };