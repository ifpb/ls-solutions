//function_prime = require('./function-prime.js')
import { function_prime } from "./function-prime.mjs";

//true
console.log("F(2): ",function_prime(2))
 
//true 
console.log("F(3): ",function_prime(3))
 
//false 
console.log("F(4): ",function_prime(4))
 
//true 
console.log("F(5): ",function_prime(5))
 
//false 
console.log("F(6): ",function_prime(6))
 
//true 
console.log("F(7): ",function_prime(7))
 
//false 
console.log("F(8): ",function_prime(8))
 
//false 
console.log("F(9): ",function_prime(9))

//false
console.log("F(10):",function_prime(10))

//true
console.log("F(11):",function_prime(11))
