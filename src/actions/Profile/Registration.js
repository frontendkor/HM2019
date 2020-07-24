export const REGISTRATION = "REGISTRATION";

const Registration = (userLogin, password, phone) => {
  return {
    type: REGISTRATION,
    payload: {
      isAuth: true,
      userLogin: userLogin,
      password: password,
      phone: phone
    }
  };
};

export default Registration;
