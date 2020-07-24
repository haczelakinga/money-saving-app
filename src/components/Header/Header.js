import React from 'react';
import logo from './../../assets/logo.png'
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header-title'><img src={logo} alt='budget-manager'></img></h1>
            </Link>
            <Link className='login-button' to='/login'>Log In</Link>
        </header>
    )
}

export default Header;