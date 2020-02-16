import calculateTheAmount from "./calculateTheAmount";

export const ADD_PRODUCT = "ADD_PRODUCT";

const addProduct = (product, cartData) => {
  let cart = cartData.cart;
  if (cart.length === 0) {
    cart.push(product);
  } else {
    let productInCart = cart.find((item, i, cart) => {
      return item.id === product.id ? true : false;
    });
    // If the product has been added previously, then increase its quantity.
    if (productInCart) {
      productInCart.count++;
      productInCart.price += product.price;
    } else {
      cart.push(product);
    }
  }

  // Calculate the amount of purchases
  let sum = calculateTheAmount(cart);

  // Rewrite localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("sum", JSON.stringify(sum));
  return {
    type: ADD_PRODUCT,
    payload: {
      cart: cart,
      sum: sum
    }
  };
};

export default addProduct;
