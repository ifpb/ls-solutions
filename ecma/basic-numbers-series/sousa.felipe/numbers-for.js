let result = '';

for (let flag = 0; flag < 100; flag += 1){
    if (flag % 10 === 9){
        if (flag == 9){
            result += '0' + flag + '\n'
        }
        else{
            result += flag + '\n'
        }
    }
    else if (flag < 9){
        result += '0' + flag + ' '
    }
    
    else{
        result += flag + ' '
    }
    

}

console.log(result)