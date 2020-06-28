//triangle_checker = require('./function-triangle-checker.js')
import { triangle_checker } from "./function-triangle-checker.mjs";

//equilateral
console.log("F( 2,  2,  2):",triangle_checker(2, 2, 2))

//equilateral
console.log("F(10, 10, 10):",triangle_checker(10, 10, 10))

//isosceles
console.log("F( 3,  4,  4):",triangle_checker(3, 4, 4))

//isosceles
console.log("F( 4,  3,  4):",triangle_checker(4, 3, 4))

//isosceles
console.log("F( 4,  4,  3):",triangle_checker(4, 4, 3))

//isosceles
console.log("F(10, 10,  2):",triangle_checker(10, 10, 2))

//scalene
console.log("F( 3,  4,  5):",triangle_checker(3, 4, 5))

//scalene
console.log("F(10, 11, 12):",triangle_checker(10, 11, 12))

//scalene
console.log("F( 5,  4,  2):",triangle_checker(5, 4, 2))

//none
console.log("F( 0,  0,  0):",triangle_checker(0, 0, 0))

//none
console.log("F( 3,  4, -5):",triangle_checker(3, 4, -5))

//none
console.log("F( 1,  1,  3):",triangle_checker(1, 1, 3))

//none
console.log("F( 2,  4,  2):",triangle_checker(2, 4, 2))
