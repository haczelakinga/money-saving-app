import React, { Fragment, useRef } from 'react';
import logo from './../../assets/logo.png';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButtonContainer';
import Hamburger from '../Hamburger/Hamburger';

const Header = ({userStatus}) => {
	const navRef = useRef(null);

	const location = useLocation();

	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="budget-manager" className="header-title" />
			</Link>
			<div className="position-wrapper">
				<nav  ref={navRef} className="navigation">
					{userStatus === true && (
						<Fragment>
							<Link
								to={
									location.pathname === '/'
										? '/moneymanager'
										: '/'
								}
								className="nav-link link">
								{location.pathname === '/' ? 'Transactions' : 'Home'}
							</Link>

							<Link
								to={
									location.pathname === '/charts'
										? '/moneymanager'
										: '/charts'
								}
								className="nav-link link">
								{location.pathname === '/charts'
									? 'Transactions'
									: 'Statistics'}
							</Link>
						</Fragment>
					)}
					<div className="nav-link">
						<LoginButton />
					</div>
				</nav>
			</div>
			<Hamburger navRef = {navRef}/>
		</header>
	);
};

export default Header;
