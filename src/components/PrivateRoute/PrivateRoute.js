import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

const PrivateRoute = ({ component: Component, userStatus, ...rest }) => (
  console.log(userStatus),
  (
    <Route
      {...rest}
      render={(props) =>
        userStatus ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
);
export default PrivateRoute;
