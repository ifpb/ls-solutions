function fibo(num){
    let r=0
    let n1=1
    let aux
    if (num>1){
        for(num; num>1; num--){
            aux=r
            r+=n1
            n1=aux
        }
        return r
    }else if(num==1){
        return 0
    }
}

export{fibo}