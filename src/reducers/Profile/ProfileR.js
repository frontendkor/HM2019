import { REGISTRATION } from "../../actions/Profile/Registration";
import { LOGIN } from "../../actions/Profile/Login";
import { LOGOUT } from "../../actions/Profile/Logout";

const initialState = {
  isAuth: false,
  userLogin: "",
  password: "",
  phone: "",
  phone2: ""
};

const ProfileR = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        userLogin: action.payload.userLogin,
        password: action.payload.password,
        phone: action.payload.phone
      };
    case LOGIN:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        userLogin: action.payload.userLogin,
        password: action.payload.password
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        userLogin: action.payload.userLogin,
        password: action.payload.password
      };
    default:
      return state;
  }
};

export default ProfileR;
