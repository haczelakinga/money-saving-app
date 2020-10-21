import React, { Fragment } from 'react';
import logo from './../../assets/logo.png';
import './Header.scss';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButtonContainer';
import Hamburger from '../Hamburger/Hamburger';

class Header extends React.Component {
	state = {
		pathOne: window.location.pathname,
		pathTwo: window.location.pathname,
		nav: ''
	};

	componentDidMount() {
		const navHTML = document.querySelector('.navigation');
		this.setState({
			nav: navHTML
		});
	}

	handleClick = () => {
		let currentUrl = window.location.pathname;
		this.setState({
			pathOne: currentUrl,
			pathTwo: currentUrl
		});
		this.state.nav.classList.remove('open');
	};

	render() {
		return (
			<header className="header">
				<Link to="/" onClick={this.handleClick}>
					<img src={logo} alt="budget-manager" className="header-title" />
				</Link>
				<div className="position-wrapper">
					<nav className="navigation">
						{this.props.userStatus === true && (
							<Fragment>
								<Link
									to={window.location.pathname === '/' ? '/moneymanager' : '/'}
									className="nav-link link"
									onClick={this.handleClick}>
									{window.location.pathname === '/' ? 'Transactions' : 'Home'}
								</Link>

								<Link
									to={
										window.location.pathname === '/charts'
											? '/moneymanager'
											: '/charts'
									}
									className="nav-link link"
									onClick={this.handleClick}>
									{window.location.pathname === '/charts'
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
				<Hamburger nav={this.state.nav} />
			</header>
		);
	}
}

export default Header;
