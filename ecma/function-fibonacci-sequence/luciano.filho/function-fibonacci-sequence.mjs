function fibonacci_sequence(a) {
    x = 0; y = 1; cont = 0;
    let number = [x,y];
    for (;;){
      if (cont == a){
        break;
      }
      number.push (x+y);
      z = y;
      y = x + z;
      x = z;
      cont += 1;
    }
    number.pop(); number.pop();
    return number;
}

//module.exports = fibonacci_sequence;
export { fibonacci_sequence };
