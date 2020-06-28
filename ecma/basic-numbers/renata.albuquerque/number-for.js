let result = "";

for (let n = 0; n <= 99; n++){
    if (n < 10) {
        result += "0" + n + " ";
    } else if (n % 10 === 9){
        result += "\n" + n + " ";
    }else {
        result += n + " ";
    }
}
console.log(result);