let i = 9, resultado = '';

for (let k = 99; k >= 0; k--){
    if (k = 9 && k%2){
        resultado += '0' + k;
    }
    else if (k%2){
        resultado += k;
    }
    if (i === 0){
        resultado += '\n';
        i = 9;
    }
    else{
        resultado += ' ';
        i--;
    }
}
console.log(resultado)