import calculateTheAmount from "./calculateTheAmount";

export const AMOUNT_PRODUCT = "AMOUNT_PRODUCT";

const amountProduct = (product, move, cartData) => {
  let cart = cartData.cart;
  let sum = cartData.sum;

  // Remove - Add product
  cart.forEach((item, i, cart) => {
    let priceUnit = product.price / cart[i].count;
    const reduceAmount = () => {
      cart[i].count--;
      cart[i].price = cart[i].price - priceUnit;
    };
    const addAmount = () => {
      cart[i].count++;
      let price = priceUnit * cart[i].count;
      price = price.toFixed(1);
      cart[i].price = +price;
    };
    if (item.id === product.id) {
      move === "+" && addAmount();
      if (move === "-") {
        cart[i].count > 1 ? reduceAmount() : cart.splice(i, 1);
      }
    }
  });

  // Calculate the amount of purchases
  sum = calculateTheAmount(cart);

  // Rewrite localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("sum", JSON.stringify(sum));

  return {
    type: AMOUNT_PRODUCT,
    payload: {
      cart: cart,
      sum: sum
    }
  };
};

export default amountProduct;
