export const LOGIN = "LOGIN";

const Login = (authenticated, userLogin, password) => {
  return {
    type: LOGIN,
    payload: {
      authenticated: authenticated,
      userLogin: userLogin,
      password: password
    }
  };
};

export default Login;
