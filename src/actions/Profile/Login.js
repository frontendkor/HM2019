export const LOGIN = "LOGIN";

const Login = (userLogin, password) => {
  return {
    type: LOGIN,
    payload: {
      isAuth: true,
      userLogin: userLogin,
      password: password
    }
  };
};

export default Login;
