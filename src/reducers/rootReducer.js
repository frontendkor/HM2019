import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import getCatalogR from "./Catalog/getCatalogR";
import getActionsR from "./Actions/getActionsR";
import cartR from "./Cart/cartR";
import ProfileR from "./Profile/ProfileR";

export const rootReducer = combineReducers({
  catalog: getCatalogR,
  actions: getActionsR,
  cartData: cartR,
  profile: ProfileR,
  form: formReducer
});
