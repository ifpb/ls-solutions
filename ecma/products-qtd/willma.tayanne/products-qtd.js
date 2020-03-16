function gtZero(products) {



}

function subTotal(products) {
  
  const sum = (id, preco, total) => preco[1] * total[2];
  return subTotal.reduce(sum, 0);

}

function total(products) {

  const sum = (id, preco, total) => preco[1] * total[2] ++;
  return total.reduce(sum, 0);
}

export { gtZero, subTotal, total };
