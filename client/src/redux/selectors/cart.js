import { createSelector } from 'reselect';

const getCart = (state) => state.shoppingCart.cart; // Access the cart state from the store

const getCartItem = (cart, productId) => cart.find(item => item.productId === productId);

export const getCartItemQuantity = createSelector(
  [getCart, (state, productId) => productId],
  (cart, productId) => getCartItem(cart, productId)?.quantity || 0
);

 
