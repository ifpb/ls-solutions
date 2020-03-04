function fibonum(valor){
    let f=0
    let i=1
    let b
    for(let x = valor; x>1; x--){
        b=f
        f+=i
        i=b
    }
    return f
}
console.log(fibonum(6))