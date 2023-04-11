import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="title">
                    <h1>GeekLand</h1>
                </div>
                <div className="link">
                    <a href="/statistics">Statistics</a>
                    <a href="/applied">Applied Jobs</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className='nav-btn'>
                    <button className='btn'>Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;