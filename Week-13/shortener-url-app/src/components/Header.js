import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav>
            <a href="#" className='title'>Shortly</a>
            <div className='container'>
                <div className='left-container'>
                    <a href='#'>Features</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>Resources</a>
                </div>
                <div className='right-container'>
                    <a href='#'>Login</a>
                    <a href='#' className='btn-blue'>Signup</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;