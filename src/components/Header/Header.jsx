import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className='header'>

            <div onClick={() => setOpen(!open)} className='nav-icon'>
                <span>{
                    open === true
                        ? <XMarkIcon className="icons" />
                        : <Bars3Icon className="icons" />
                }
                </span>
            </div>

            <nav className='navbar'>

                <div className="title">
                    <h1><Link className='anchor-title' to="/"><span className='geeks'>Geeks</span><span className='land'>Land</span></Link></h1>
                </div>
                <div className={`link ${open ? 'link-open' : 'link-close'}`}>
                    <ul>
                        <li>
                            <NavLink to="/statistics" className={({isActive}) => isActive ? 'active-link' : ''}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/applied">Applied Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
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