function triangle_checker(a, b, c) {
  x = (a == b);
  y = (b == c);
  z = (c == a);
  if (((x && y) || (y && z)) || (z && x)){
    if (a == 0){
      result = "none"
    }
    else{
      result = "equilateral"
    }
  }
  else if ((!x && !y) && (!x && !z)){
    result = "scalene"
  }
  else{
    result = "isosceles"
  }
  return result;
}

//module.exports = triangle_checker;
export { triangle_checker };
