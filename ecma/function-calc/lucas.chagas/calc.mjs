/**
 * operator: '+', '-', '*', '/'
 */

function calc(operand1, operand2, operator) {
    switch (operator){
       case '+':
           return operand1+operand2;
           break
        case '-':
           return operand1-operand2;
           break
        case '*':
           return operand1*operand2;
           break
        case '/':
           return operand1/operand2;
           break
        default:
            return 0;
    }
  }
  
export { calc };

  