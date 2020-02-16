import calculateTheAmount from "./calculateTheAmount";

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const removeProduct = (product, cartData) => {
  let cart = cartData.cart;
  let sum = cartData.sum;

  // Remove product
  cart.forEach((item, i, cart) => {
    if (item.id === product.id) {
      cart = cart.splice(i, 1);
    }
  });

  // Calculate the amount of purchases
  sum = calculateTheAmount(cart);

  // Rewrite localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("sum", JSON.stringify(sum));
  return {
    type: REMOVE_PRODUCT,
    payload: {
      cart: cart,
      sum: sum
    }
  };
};

export default removeProduct;
