const weight = 50;
const height = 2.20;
let result = weight/(height ** 2);
console.log(result)
if(result <18.5){
    console.log("You are Underweight");
}
else if(result < 25){
    console.log("Normal weight");
}
else if(result < 30){
    console.log("Overweight");
}
else{
    console.log("Obesity")
}