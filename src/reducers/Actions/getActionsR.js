import { GET_ACTIONS_REQUEST } from "../../actions/Actions/getActions";
import { GET_ACTIONS_SUCCESS } from "../../actions/Actions/getActions";

export const initialState = {
  wait: true,
  data: null
};

const getActionsR = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIONS_REQUEST:
      return {
        ...state,
        wait: action.payload.wait
      };
    case GET_ACTIONS_SUCCESS:
      return {
        ...state,
        wait: action.payload.wait,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default getActionsR;
