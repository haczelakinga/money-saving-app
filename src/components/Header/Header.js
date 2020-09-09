import React from "react";
import logo from "./../../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButtonContainer";

class Header extends React.Component {
  state = {
    path: window.location.pathname,
  };

  handleClick = () => {
    let currentUrl = window.location.pathname;
    this.setState({
      path: currentUrl,
    });
  };

  render() {
    return (
      <header className="header">
        <Link to="/" onClick={this.handleClick}>
          <h1 className="header-title">
            <img src={logo} alt="budget-manager" />
          </h1>
        </Link>

        {this.props.userStatus === true && (
          <Link
            to={window.location.pathname === "/" ? "/moneymanager" : "/"}
            className="link"
            onClick={this.handleClick}
          >
            {window.location.pathname === "/" ? "My transactions" : "Home"}
          </Link>
        )}
        <LoginButton />
      </header>
    );
  }
}

export default Header;
