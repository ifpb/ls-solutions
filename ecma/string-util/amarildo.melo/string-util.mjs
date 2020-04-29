function formatter(text, action){
    switch(action){
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
    }
}


export { formatter };