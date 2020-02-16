import { INIT_CART } from "../../actions/Cart/initCart";
import { ADD_PRODUCT } from "../../actions/Cart/addProduct";
import { REMOVE_PRODUCT } from "../../actions/Cart/removeProduct";
import { AMOUNT_PRODUCT } from "../../actions/Cart/amountProduct";

const initialState = {
  cart: [],
  sum: 0
};

const cartR = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CART:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    case AMOUNT_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart,
        sum: action.payload.sum
      };
    default:
      return state;
  }
};

export default cartR;
