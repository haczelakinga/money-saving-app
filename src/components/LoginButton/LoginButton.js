import React from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

const LoginButton = () => {
  const currentPath = window.location.pathname;
  let buttonText = "";
  if (currentPath === "/moneymanager") {
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
