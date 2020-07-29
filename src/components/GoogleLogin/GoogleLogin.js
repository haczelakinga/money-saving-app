import React from 'react';
import GoogleLogin from 'react-google-login';
import './GoogleLogin.scss'

const responseGoogle = (response) => {
    console.log(response);
}

const GoogleLogIn = () => {
    return (
        <GoogleLogin
            clientId="725774263281-p7ktfhcjtbnic651bc2cunq639h5qpo0.apps.googleusercontent.com"
            className='login'
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}
export default GoogleLogIn;