import React from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

const LoginButton = ({ userStatus }) => {
  let buttonText = "";
  if (userStatus) {
    buttonText = "Log Out";
  } else {
    buttonText = "Log In";
  }

  return (
    <Link className="login-button" to="/login">
      {buttonText}
    </Link>
  );
};

export default LoginButton;
