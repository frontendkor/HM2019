import React from "react";
import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";

import ContactFormContainer from "../../components/Forms/ContactForm/ContactFormContainer";

import "./Profile.sass";

const Profile = props => {
  const { isAuth, userLogin } = props;
  return (
    <>
      {isAuth ? (
        <section className="Profile">
          <div className="ProfileTitleContainer">
            <h5>
              Привет <span>{userLogin}</span>
            </h5>
            <Link to="/settings" className="ProfileSettingsBtn">
              Смена пароля
            </Link>
          </div>
          <ContactFormContainer />
        </section>
      ) : (
        <Redirect to="/authorization" />
      )}
    </>
  );
};

const mapStateToProps = store => {
  return {
    profile: store.profile,
    isAuth: store.profile.isAuth,
    userLogin: store.profile.userLogin
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
