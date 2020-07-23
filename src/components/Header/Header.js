import React from 'react';
import logo from './../../assets/logo.png'
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-title'><img src={logo} alt='budget-manager'></img></h1>
            <button className='button'>Log In</button>
        </header>
    )
}

export default Header;