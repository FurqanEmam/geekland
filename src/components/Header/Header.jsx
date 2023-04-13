import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="title">
                    <h1>GeekLand</h1>
                </div>
                <div className="link">
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <div className='nav-btn'>
                    <button className='btn'>Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;