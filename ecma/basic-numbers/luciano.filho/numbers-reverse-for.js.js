texto = "";
number = 99;
//for (let number = 99; number >= 0; number-= 1)
do{
    if (number<10){
        texto = texto + "0" + number + " "
    }
    else if(number%10 === 0){
        texto = texto + String(number) + "\n"
    }
    else{
        texto = texto + String(number) + " "
    }
    number += -1;
} while (number >= 0);
console.log(texto)