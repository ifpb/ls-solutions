resultado = '';

for (let k = 0; k < 10; k++){
    for(let i = 0; i < 10; i++){
        resultado += `${k}${i} `;
    }
    resultado += '\n';
}
console.log(resultado)