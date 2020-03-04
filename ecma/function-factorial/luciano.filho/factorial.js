module.exports = function factorial(x) {
    z = x;
    for (x; x != 2; x -= 1){
        z = z * (x-1);
    }
    return z;
}