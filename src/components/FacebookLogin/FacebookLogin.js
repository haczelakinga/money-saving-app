import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}
const componentClicked = () => {
    console.log('clicked');
}

const FaceboookLogin = () => {
    return (
        <FacebookLogin
            appId="2670655546369010"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}/>
    )
}

export default  FaceboookLogin;
