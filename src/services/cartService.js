import { products } from "../data/mockData";

export function getCartItems() {
  const product = products[0];
  return [{ productId: product.id, quantity: 1, price: product.price, options: [] }];
}

export function getCartTotal(items = getCartItems()) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
