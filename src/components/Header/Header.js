import React from 'react';
import logo from './../../assets/logo.png'
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-title'><img src={logo} alt='budget-manager'></img></h1>
            {/* <button className='button'> */}
                <Link className='login-button' to='/login'>Log In</Link>
            {/* </button> */}
        </header>
    )
}

export default Header;