function snakeCase(texto){
    let array = texto.split(' ');
    let textoSnake = array.join('_');
    return textoSnake;
}


function formatter(text, action){
    switch(action){
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'snakecase':
        	return snakeCase(text);

    }
}


export { formatter, snakeCase };