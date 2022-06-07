import data from './data.js';

export const getCart = (userId) => {
  // if does not exist, create a new cart
  let cart = data.carts.find(cart => cart.userId === userId);
  if (!cart) {
    cart = {
      userId,
      products: []
    };
    data.carts.push(cart);
  }
  return cart;
}

export const addProductToCart = (userId, productId) => {
  const cart = getCart(userId);
  const productAlreadyInCart = cart.products.find(prod => prod.id == productId);
  if (productAlreadyInCart) {
    productAlreadyInCart.quantity++;
  } else {
    cart.products.push({
      id: productId,
      quantity: 1
    });
  }
}
