function fatorial (n){
    if ((n === 0) || (n === 1)){
        return 1;
    } else{
        let fat = 1;
        for (let i = n; i > 1; i-- ){
            fat = fat * i
        }
        return fat;
    }
}

export {fatorial}