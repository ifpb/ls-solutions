const m=100;
const h=1.72;
let result;

if((m/h**2)<18.5){
    console.log('Você está abaixo do peso')
}
else if((m/h**2)<24.9){
    console.log('Você está saudável')
}
else if((m/h**2)<29.9){
    console.log('Você está acima do peso')
}
else{
    console.log('Você está obeso')
}