function fibonacci(number) {
    let a = 0;
    let b = 1;
    let result = a + b;
    let cont = 0
    if (number > 1){
        while (number > 2){
            result = a + b;
            a = b;
            b = result;
            number --;
            result += cont;
            return (result)
        }
    }
    else if (number == 1){
        return (0)
    }
    else{
        return ("undefined")
    }
console.log(fibonacci(4))