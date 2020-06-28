function triangulo(a,b,c){
    if(a>=b+c || b>=a+c || c>= a+b){
        return "none"
    }
    else if (a==b && b==c){
        return "Triângulo equilátero"
    }else if(a==b || a==c || c==b ){
        return "Triângulo isósceles"
    }else{
        return "Triângulo escaleno"
    }
}

export {triangulo}