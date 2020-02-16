import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Btn from "../../Btn/Btn";

import Logout from "../../../actions/Profile/Logout";

import "./LogoutBtn.sass";
// import "./AuthorizationForm.sass";

const LogoutBtn = props => {
  const { Logout } = props;
  const exit = () => {
    Logout(false);
  };
  return (
    <div className="LogoutBtnContainer">
      <Btn
        href="/registration"
        title="Выйти"
        size="medium"
        link={true}
        onClick={exit.bind(this)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Logout: authenticated => dispatch(Logout(authenticated))
  };
};

LogoutBtn.propTypes = {
  Logout: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutBtn);
