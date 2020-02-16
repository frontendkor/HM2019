export const INIT_CART = "INIT_CART";
let cart = [];
let sum = 0;

const initCart = () => {
  //If localStorage is not empty, then take values ​​from it.
  if (localStorage.getItem("cart") !== null) {
    cart = JSON.parse(localStorage.cart);
    sum = JSON.parse(localStorage.sum);
  }
  return {
    type: INIT_CART,
    payload: {
      cart: cart,
      sum: sum
    }
  };
};

export default initCart;
