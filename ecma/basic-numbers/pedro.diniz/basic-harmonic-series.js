let result = '';

for (let k=0; k<100; k++) {
  result+=k<10 ?'0'+k:k;
  result+=k%10===9 ? '\n' : ' ';
}

console.log(result);

// parte 2

let res = '';

for (let i = 99; i>-1; i--){
    res+=i<10 ? '0'+i:i;
    res+=i%10===0 ? '\n':' ';
}

console.log(res);

// parte 3

let res2 = '';

for (let j = 99; j>-1; j+=-2){
    res2+=j<10 ? '0'+j:j;
    res2+=j%10===1 ? '\n':' ';
}

console.log(res2)