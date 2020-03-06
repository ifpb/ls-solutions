function calc (operand1, operand2, operator) {

    switch (operator) {

        case '+':
            return operand1 + operand2;
        
        case '-':
            return operand1 - operand2;
        
        case '*':
            return operand1 * operand1;
        
        case '/':
            return operand1 / operand2;

    }

}
console.log(calc(1,1,'+'));
console.log(calc(1,1,'-'));
console.log(calc(1,1,'*'));
console.log(calc(1,1,'/'));