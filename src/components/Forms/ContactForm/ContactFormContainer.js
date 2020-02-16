import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "./ContactForm";

import Logout from "../../../actions/Profile/Logout";

class ContactFormContainer extends Component {
  submit(values) {
    console.log(JSON.stringify(values));
  }
  exit() {
    Logout(false);
  }
  getInitialValues() {
    const { phone } = this.props;
    return {
      phone: phone
    };
  }
  render() {
    return (
      <ContactForm
        onSubmit={this.submit.bind(this)}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    phone: store.profile.phone
  };
};

export default connect(
  mapStateToProps,
  null
)(ContactFormContainer);
