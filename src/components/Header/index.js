import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className="header">
                <div className="header-logo">
                    Expenser <i class="fa-solid fa-credit-card"></i>
                </div>
                <div className='header-button'>
                    <a href="https://github.com/DhananjayRakshe" target= "_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Star</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
