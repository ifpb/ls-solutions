function fatorar(fat){
    let count = 1
    let num = 1
    let aux = 0
    while (count <= fat){
        num = num * count
        count += 1
    }
    return num
}

export{fatorar}