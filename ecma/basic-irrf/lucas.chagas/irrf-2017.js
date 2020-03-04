const slr = 5000;
let tax;
if (slr < 1903.99) {
    tax=0;
} else if (slr<2826.65 ) {
    tax= (slr*0.075)- 142.8;
} else if (slr<3751.05 ) {
    tax= (slr*0.15)- 354.8; 
} else if (slr<4664.68 ) {
    tax= (slr*0.225)-636.13; 
} else {
    tax= (slr*0.275)-869.36;
}
console.log(`IRRF: ${tax}`)


//tax = salary * taxRate - deduction

/*
Base de cálculo mensal em R$    Alíquota %     Parcela a deduzir do imposto em R$
Até 1.903,98 	                    –                   –
De 1.903,99 até 2.826,65 	        7,5 	        142,80
De 2.826,66 até 3.751,05 	        15,0 	        354,80
De 3.751,06 até 4.664,68 	        22,5 	        636,13
Acima de 4.664,68 	                27,5 	        869,36
*/