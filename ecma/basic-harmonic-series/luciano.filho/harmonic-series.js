const size = 10;
let h = 0;
for (let jump = 1; jump < (size+1); jump+=1){
    h += 1/jump;
}
result = "h(" + size + ") = " + h
console.log(result)