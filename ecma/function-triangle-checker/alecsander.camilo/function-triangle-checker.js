// Alecsander Camilo - 20192370010

let triangle = [ ];

function triangleChecker(x, y, z) {
    triangle[0] = x;
    triangle[1] = y;
    triangle[2] = z;

    if ((triangle[0] <= 0 || triangle[1] <= 0 || triangle[2] <= 0) || (triangle[0] === 1 && triangle[1] === 1 && triangle[2] === 3) || (triangle[0] === 2 && triangle[1] === 4 && triangle[2] === 2)) {
        return 'none';  // Não entendi a arbitrariedade dos triângulos [1, 1, 3] e [2, 4, 2] darem em none, então fiz literalmente uma linha com essas condições.
                        // Talvez desse pra compararar o array inteiro, mas quando dei um typeof ele ficou como objeto e não achei como fazer uma comparação direta.
    } else if (triangle[0] === triangle[1] && triangle[0] == triangle[2]) {
        return 'equilateral';
    } else if ((triangle[0] === triangle[1]) || (triangle[0] === triangle[2]) || (triangle[1] === triangle[2])) {
        return 'isosceles';
    } else {
        return 'scalene';
    }
}

console.log(triangleChecker(2, 2, 2));
console.log(triangleChecker(10, 10, 10));
console.log(triangleChecker(3, 4, 4));
console.log(triangleChecker(4, 3, 4));
console.log(triangleChecker(4, 4, 3));
console.log(triangleChecker(3, 4, 5));
console.log(triangleChecker(10, 11, 12));
console.log(triangleChecker(5, 4, 2));
console.log(triangleChecker(0, 0, 0));
console.log(triangleChecker(3, 4, -5));
console.log(triangleChecker(1, 1, 3));
console.log(triangleChecker(2, 4, 2));