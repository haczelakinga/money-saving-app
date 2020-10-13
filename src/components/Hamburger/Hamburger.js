import React from 'react';
import './Hamburger.scss'

const Hamburger = () => {
    
    const handleClick = () => {
        console.log('clicked')
    }
    
    return (
        <div className='hamburger'>
            <span className="fas fa-ellipsis-v" onClick={handleClick}></span>
        </div>
    )
}

export default Hamburger;
