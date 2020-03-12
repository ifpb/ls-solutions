let result = '';

for (let flag = 99; flag >= 0; flag -= 1){
    if (flag % 10 == 0 ){
        if (flag == 0){
            result += '0' + flag
        }
        else{
            result += flag + '\n'
        }
    }
    else if (flag < 10){
        result += '0' + flag + ' '
    }
    
    else{
        result += flag + ' '
    }
    

}

console.log(result)