const weight = 60;
const height = 1.65;
let result = weight / height **2;
console.log(result)

switch(true) { 
    case (result < 18.5):
        console.log("You are Underweight");
        break;
    
    case (result < 24.9):
        console.log("Normal weight");
        break;

    case (result < 29.9):
        console.log("You are Overweight");
        break;
    
    case (result > 30.0):
        console.log("Obesity");
        break;
    
    default:
        console.log("incorrect values")
    

}
