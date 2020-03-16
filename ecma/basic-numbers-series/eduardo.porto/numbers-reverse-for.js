let i = 9, resultado = '';

for (k = 99; k >= 0; k--){
    if (k <= 9){
        resultado += '0' + k;
    }
    else{
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