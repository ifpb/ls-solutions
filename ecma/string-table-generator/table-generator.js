function createTable (rows, colums, text){
    let result = '';
    if (text){
        text = ' '+ text + ' '
    }
    else{
        text = ''
    }
    for (let rowInd = 0 ; rowInd < rows ; rowInd += 1){
        for (let columInd = 0 ; columInd < colums ; columInd += 1){
            result += `${text} ${rowInd + 1}.${columInd + 1}`
        }
        result += '\n';
    }
    return result;
}

function createTableHTML (rows, colums, text){
    let result = '<table>\n';
    if (text){
        text = text
    }
    else{
        text = ''
    }
    for (let rowInd = 0 ; rowInd < rows ; rowInd += 1){
        result += '  <tr>\n';
        for (let columInd = 0 ; columInd < colums ; columInd += 1){
            result += `    <td>${text} ${rowInd + 1}.${columInd + 1}</td>\n`
        }
        result += '  <td>\n';
    }
    result += '</table>';
    return result;
}

export {createTable, createTableHTML};

