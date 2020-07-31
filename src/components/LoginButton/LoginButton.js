import React from "react";
import {Link} from "react-router-dom";
import './LoginButton.scss';

const LoginButton = () => {
    return (
        <Link className='login-button' to='/login'>Log In</Link>
    )
}

export default LoginButton;