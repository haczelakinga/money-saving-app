import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.scss";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router";

class Login extends React.Component {
  state = {
    loginStatus: false,
  };
  facebookHandler = (response) => {
    let details = {
      name: response.name,
      photo: response.picture,
      userID: response.id,
      loginStatus: true,
    };
    this.props.setUserDetails(details);
    this.setState({
      loginStatus: true,
    });
  };

  googleHandler = (response) => {
    console.log(response);
    let details = {
      name: response.profileObj.name,
      photo: response.profileObj.imageUrl,
      userID: response.googleId,
      loginStatus: true,
    };
    this.props.setUserDetails(details);
    this.setState({
      loginStatus: true,
    });
  };
  render() {
    if (this.state.loginStatus === true) {
      return <Redirect to="/moneymanager" />;
    } else {
      return (
        <div className="login-wrapper">
          <FacebookLogin
            appId="2670655546369010"
            cssClass="facebook-login"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.facebookHandler}
          />

          <GoogleLogin
            clientId="725774263281-p7ktfhcjtbnic651bc2cunq639h5qpo0.apps.googleusercontent.com"
            className="google-login"
            buttonText="Login with Google"
            onSuccess={this.googleHandler}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      );
    }
  }
}
export default Login;
