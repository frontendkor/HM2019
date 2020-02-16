import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthorizationForm from "./AuthorizationForm";

import Login from "../../../actions/Profile/Login";

class AuthorizationFormContainer extends Component {
  submit(values) {
    const { Login } = this.props;
    console.log(JSON.stringify(values));
    let login = values.login;
    let password = values.password;
    Login(true, login, password);
    this.props.history.replace("/profile");
  }
  render() {
    return <AuthorizationForm onSubmit={this.submit.bind(this)} />;
  }
}

const mapStateToProps = store => {
  return {
    form: store.form.AuthorizationForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (authenticated, login, password) =>
      dispatch(Login(authenticated, login, password))
  };
};

AuthorizationFormContainer.propTypes = {
  Login: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationFormContainer);
