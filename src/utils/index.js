export const sumTotal = (cart) =>
  cart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
