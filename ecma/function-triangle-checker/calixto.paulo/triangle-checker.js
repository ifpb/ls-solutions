function triangleChecker(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) return 'none';
  else if(a == b & a == c & b == c) return 'equilateral';
  else if(a != b & a != c & c != b) return 'scalene';
  else{
    return 'isosceles'
  }
}
export { triangleChecker };
