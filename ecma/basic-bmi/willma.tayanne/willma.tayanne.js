
const weight = 60;
const height = 1.65;
let result = weight / height **2;
console.log(result)

if (result < 18.5) {

    console.log("You are Underweight");
}

else if (result < 24.9) {

    console.log("Normal weight");
}

else if (result < 29.9) {

    console.log("You are Overweight");
}

else {

    console.log("Obesity");
}
