import React from "react";
import { Redirect, Route } from "react-router-dom";

import Profile from "../../components/Profile/Profile";

const ProfilePage = props => {
  const { authenticated } = props;
  return (
    <Route
      render={props => {
        return authenticated === true ? (
          <Profile />
        ) : (
          <Redirect
            to={{
              pathname: "/authorization",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default ProfilePage;
