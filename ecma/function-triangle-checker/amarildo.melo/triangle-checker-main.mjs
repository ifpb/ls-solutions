import { triangleChecker } from "./triangle-checker.mjs";

// checking if it is equilateral
console.log(triangleChecker(2, 2, 2));
console.log(triangleChecker(10, 10, 10));

// checking if it is isosceles
console.log(triangleChecker(3, 4, 4));
console.log(triangleChecker(4, 3, 4));
console.log(triangleChecker(4, 4, 3));
console.log(triangleChecker(10, 10, 2));

// checking if it is scalene
console.log(triangleChecker(3, 4, 5));
console.log(triangleChecker(10, 11, 12));
console.log(triangleChecker(5, 4, 2));

// checking if it is invalid
console.log(triangleChecker(0, 0, 0));
console.log(triangleChecker(3, 4, -5));
console.log(triangleChecker(1, 1, 3));
console.log(triangleChecker(2, 4, 2));
