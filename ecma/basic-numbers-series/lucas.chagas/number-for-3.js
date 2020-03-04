console.log('Parte 3 - Ímpares de 99 até 00 agrupados de 5 em 5');
console.log ();
let resl3 = "";

for (let flag = 99; flag >-1; flag -=2) {
    resl3 += flag < 10 ? "0" +flag : flag;
    resl3 += flag %10 == 1 ? "\n" : " ";
    };
console.log(resl3);

/*
 */