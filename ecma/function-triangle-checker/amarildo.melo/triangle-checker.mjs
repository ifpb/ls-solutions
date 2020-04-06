function triangleChecker(ladoA, ladoB, ladoC){

    if( (ladoA < (ladoB+ladoC))  &&  (ladoB < (ladoA+ladoC))  &&  (ladoC < (ladoA+ladoB)) ){
        if( ladoA === ladoB && ladoB === ladoC ){
            return "equilateral"; 
        }else if( ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
            return "scalene";
        }else{
            return "isosceles";
        }
    }else{
        return "none";
    }


}

export { triangleChecker };

/*  
*   A medida de qualquer um dos lados 
*   deve ser menor que a soma das medidas dos outros dois.
*/