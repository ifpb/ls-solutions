function gtZero(products) {
  return products.filter(product => product[2] > 0)
}

function subTotal(products) {
  return products.map(product => [product[0], product[1]*product[2]])
}

function total(products) {
  return products.reduce((x,y) => x + y[1] * y[2],0)
}

export { gtZero, subTotal, total };
