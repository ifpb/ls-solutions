console.log('Parte 1 - De 00 até 99 agrupados de 10 em 10: ');
console.log ();
let result = "";

for (let flag = 0; flag <100; flag++) {
    result += flag < 10 ? "0" +flag : flag;
    if (flag %10 == 9){
        result += "\n";
    } else {
        result += " ";
    }
}

console.log(result); 

