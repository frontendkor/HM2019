export const LOGOUT = "LOGOUT";

const Logout = authenticated => {
  return {
    type: LOGOUT,
    payload: {
      authenticated: authenticated,
      userLogin: "",
      password: ""
    }
  };
};

export default Logout;
