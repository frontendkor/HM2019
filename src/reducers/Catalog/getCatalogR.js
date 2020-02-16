import { GET_CATALOG_REQUEST } from "../../actions/Catalog/getCatalog";
import { GET_CATALOG_SUCCESS } from "../../actions/Catalog/getCatalog";

const initialState = {
  wait: true,
  products: []
};

const catalogR = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOG_REQUEST:
      return {
        ...state,
        wait: action.payload.wait
      };
    case GET_CATALOG_SUCCESS:
      return {
        ...state,
        wait: action.payload.wait,
        products: action.payload.products
      };
    default:
      return state;
  }
};

export default catalogR;
