import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = ({ userStatus, logOutUser }) => {
	let buttonText = '';
	if (userStatus) {
		buttonText = 'Log Out';
	} else {
		buttonText = 'Log In';
	}

	const handleLogout = () => {
		if (userStatus) {
			logOutUser();
		}
	};

	return (
		<Link className="login-button" to="/login" onClick={handleLogout}>
			{buttonText}
		</Link>
	);
};

export default LoginButton;
