export const LOGOUT = "LOGOUT";

const Logout = () => {
  return {
    type: LOGOUT,
    payload: {
      isAuth: false,
      userLogin: "",
      password: ""
    }
  };
};

export default Logout;
