const n = 10;
let soma = 0;

for (let cont = 1; cont <= n; cont ++) {
  soma += 1 / cont;
}

console.log(`h(10): ${soma}`);