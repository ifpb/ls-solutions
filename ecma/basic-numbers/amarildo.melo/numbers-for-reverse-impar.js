let cont;
let result = "";

for(cont = 99; cont >= 00; cont--){
    if(cont % 2 != 0){
        if(cont >= 10){
            result += cont;
        }else{
            result += "0" + cont;
        }
        result += cont % 10 === 1 ? "\n" : " ";
    }
}

console.log(result);
