import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RegistrationForm from "./RegistrationForm";

import Registration from "../../../actions/Profile/Registration";

const RegistrationFormContainer = props => {
  const submit = values => {
    const { Registration } = props;
    console.log(JSON.stringify(values));
    let login = values.login;
    let password = values.password;
    let phone = values.phone;
    Registration(true, login, password, phone);
    props.history.replace("/profile");
  };
  return <RegistrationForm onSubmit={submit.bind(this)} />;
};

const mapDispatchToProps = dispatch => {
  return {
    Registration: (authenticated, login, password, phone) =>
      dispatch(Registration(authenticated, login, password, phone))
  };
};

RegistrationFormContainer.propTypes = {
  Registration: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(RegistrationFormContainer);
