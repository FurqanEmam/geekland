import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className='header'>

            <div onClick={() => setOpen(!open)} className='nav-icon'>
                <span>{
                    open === true
                        ? <XMarkIcon class="icons" />
                        : <Bars3Icon class="icons" />
                }
                </span>
            </div>

            <nav className='navbar'>

                <div className="title">
                    <h1><span className='geeks'>Geeks</span><span className='land'>Land</span></h1>
                </div>
                <div className={`link ${open ? 'link-open' : 'link-close'}`}>
                    <ul>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                        <li>
                            <Link to="/applied">Applied Jobs</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                    <div className='nav-btn'>
                        <button className='btn'>Start Applying</button>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Header;