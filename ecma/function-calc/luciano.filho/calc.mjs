/**
* operator: '+', '-', '*', '/'
*/
/*module.exports = function calc(operand1, operand2, operator) {
    while (true){
        if (operator == "+"){
            return operand1 + operand2;
            break;    
        }
        else if (operator == "-"){
            return operand1 - operand2;
            break;
        }
        else if (operator == "*"){
            return operand1 * operand2;
            break;
        }
        else if (operator == "/"){
            return operand1 / operand2;
            break;
        }
        else{
            console.log("Operador Inválido, Digite Novamente")
        }
    }
}*/

function calc(operand1, operand2, operator) {
    while (true){
        if (operator == "+"){
            return operand1 + operand2;
            break;    
        }
        else if (operator == "-"){
            return operand1 - operand2;
            break;
        }
        else if (operator == "*"){
            return operand1 * operand2;
            break;
        }
        else if (operator == "/"){
            return operand1 / operand2;
            break;
        }
        else{
            console.log("Operador Inválido, Digite Novamente");
        }
    }
}

export {calc};
