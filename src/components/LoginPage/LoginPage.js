import React from 'react';
import './LoginPage.scss';
import FaceboookLogin from "../FacebookLogin/FacebookLogin";
import GithubLogin from "../GithubLogin/GithubLogin";


const LoginPage = () => {
    return (
        <div className='login-page'>
            <FaceboookLogin />
            <GithubLogin />
        </div>

    )
}

export default  LoginPage;
