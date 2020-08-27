import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

const PrivateRoute = ({ component: Component, loginStatus, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loginStatus === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
export default PrivateRoute;
