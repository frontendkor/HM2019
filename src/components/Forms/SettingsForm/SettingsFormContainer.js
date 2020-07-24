import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SettingsForm from "./SettingsForm";

import Login from "../../../actions/Profile/Login";

class SettingsFormContainer extends Component {
  submit(values) {
    const { Login } = this.props;
    // console.log(JSON.stringify(values));
    let log = values.login;
    Login(true, log);
  }
  render() {
    const { isAuth } = this.props;
    return (
      <>
        {isAuth ? (
          <SettingsForm onSubmit={this.submit.bind(this)} />
        ) : (
          <Redirect to="/profile" />
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    isAuth: store.profile.isAuth,
    password: store.profile.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (authenticated, login) => dispatch(Login(authenticated, login))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFormContainer);
