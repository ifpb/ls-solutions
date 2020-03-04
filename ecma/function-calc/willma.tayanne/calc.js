module.exports = function calcWithEval (operand1, operand2, operator) {

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

