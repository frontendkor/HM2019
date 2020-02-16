export const REGISTRATION = "REGISTRATION";

const Registration = (authenticated, userLogin, password, phone) => {
  return {
    type: REGISTRATION,
    payload: {
      authenticated: authenticated,
      userLogin: userLogin,
      password: password,
      phone: phone
    }
  };
};

export default Registration;
