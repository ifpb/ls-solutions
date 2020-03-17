function createList (number, text){
    let result = '<ul>\n';
    if (text){
        text = text
    }
    else{
        text = 'Text'
    }
    for (let flag = 0 ; flag < number ; flag += 1){
        result += `  <li>${text} ${flag + 1}</li>\n`;
    }
    result += '</ul>';
    return result;
}

export {createList}