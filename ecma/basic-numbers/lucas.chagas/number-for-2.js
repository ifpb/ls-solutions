console.log('Parte 2 - De 99 até 00 agrupados de 10 em 10:');
console.log ();
let resl2 = "";

for (let flag = 99; flag >-1; --flag) {
    resl2 += flag < 10 ? "0" +flag : flag;
    resl2 += flag %10 == 0 ? "\n" : " ";
    };
console.log(resl2);