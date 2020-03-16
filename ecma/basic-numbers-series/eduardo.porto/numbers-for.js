let i = 0, resultado = '';
for (let k = 0; k < 100; k++){
    if(k <= 9){ 
        resultado += '0' + k;
    }
    else {
        resultado += k;
    }
    if (i === 9){
        resultado += '\n';
        i = 0;
    }
    else{
        resultado += ' ';
        i++;
    }

}
console.log(resultado)