let cont;
let result = "";

for(cont = 00; cont < 100; cont++){
    if(cont < 10){
        result += "0" + cont;
    }else{
        result += cont;
    }
    result += cont % 10 === 9 ? "\n" : " ";
}

console.log(result);
