function primo(num){
    let mult=0
    for(let i=1;i<=num;i+=1){
        if (num%i==0 ){
            mult+=1
        }
    }
    switch (true){
        case num == 1:
            return "False"
            break;
        case mult >= 3:
            return "False"
            break;
        default:
            return "True"
            break;
    }
}

export{primo}