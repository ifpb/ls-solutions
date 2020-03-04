texto = ""
number = 99
while (number >= 0){
    if (number<10){
        texto = texto + "0" + number + " "
    }
    else if(number%10 === 1){
        texto = texto + String(number) + "\n"
    }
    else{
        texto = texto + String(number) + " "
    }
    number += -2;
}
console.log(texto)