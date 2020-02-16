import React, { Component } from "react";
import { connect } from "react-redux";

import SettingsForm from "./SettingsForm";

import Login from "../../../actions/Profile/Login";

class SettingsFormContainer extends Component {
  submit(values) {
    const { Login } = this.props;
    console.log(JSON.stringify(values));
    let log = values.login;
    Login(true, log);
    this.props.history.replace("/profile");
  }
  render() {
    return <SettingsForm onSubmit={this.submit.bind(this)} />;
  }
}

const mapStateToProps = store => {
  return {
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
