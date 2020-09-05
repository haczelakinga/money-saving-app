import React from "react";
import logo from "./../../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButtonContainer";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">
          <img src={logo} alt="budget-manager"></img>
        </h1>
      </Link>
      <LoginButton />
    </header>
  );
};

export default Header;
