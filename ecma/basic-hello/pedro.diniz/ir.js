const salario = 5000

if (salario<1903.99){
    console.log('Não será necessário pagar o imposto de renda')
}
else if (salario<2826.66){
    console.log('Lhe será cobrado:\nR$',(salario*(7.5/100)-142.80))
}
else if(salario<3751.06){
    console.log('Lhe será cobrado:\nR$',(salario*(15/100)-354.80))
}
else if(salario<4664.69){
    console.log('Lhe será cobrado:\nR$',(salario*(22.5/100)-636.13))
}
else {
    console.log('Lhe será cobrado:\nR$',(salario*(27.5/100)-869.36))
}