function snakeCase(texto){
    let array = texto.split(' ');
    let textoSnake = array.join('_');
    return textoSnake;
}

function inverteTexto(texto){
    let array = texto.split('');
    let arrayInvertido = array.reverse();
    let textoInvertido = arrayInvertido.join('');
    return textoInvertido;
}


function formatter(text, action){
    switch(action){
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'snakecase':
        	return snakeCase(text);
        case 'reverse':
            return inverteTexto(text);        	
    }
}


export { formatter, snakeCase, inverteTexto };