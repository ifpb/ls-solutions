//fibonacci_sequence = require('./function-fibonacci-sequence.js')
import { fibonacci_sequence } from "./function-fibonacci-sequence.mjs";

//[]
console.log("F(0):",fibonacci_sequence(0))

//[0]
console.log("F(1):",fibonacci_sequence(1))

//[0, 1]
console.log("F(2):",fibonacci_sequence(2))

//[0, 1, 1, 2]
console.log("F(4):",fibonacci_sequence(4))

//[0, 1, 1, 2, 3, 5]
console.log("F(6):",fibonacci_sequence(6))

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log("F(10):",fibonacci_sequence(10))
