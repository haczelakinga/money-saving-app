import React from 'react';
import './LoginPage.scss';
import FacebookLogIn from "../FacebookLogin/FacebookLogin";
import GoogleLogIn from "../GoogleLogin/GoogleLogin";


const LoginPage = () => {
    return (
        <div className='login-page'>
            <FacebookLogIn />
            <GoogleLogIn />
        </div>

    )
}

export default  LoginPage;
