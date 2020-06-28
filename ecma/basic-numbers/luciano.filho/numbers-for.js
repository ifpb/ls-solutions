texto = ""
for (let number = 0; number < 100; number+= 1){
    if (number<10){
        texto = texto + "0" + number + " "
    }
    else if(number%10 === 0){
        texto = texto + "\n" + String(number) + " "
    }
    else{
        texto = texto + String(number) + " "
    }
}
console.log(texto)
