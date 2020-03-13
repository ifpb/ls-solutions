function total(products) {
  return products.reduce((x,y) => x + y[1], 0)
}

export { total };
