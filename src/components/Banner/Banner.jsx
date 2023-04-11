import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-container">
                <div className="text-area">
                    <h1>One Step</h1>
                    <h1>Closer To Your</h1>
                    <p className='dream-text'>Dream Job</p>
                    <p className='banner-details'>Lets make your dream true.</p>
                    <p className='banner-details'>Lets make a career goal, and achieve a great milestone.</p>
                    <p className='banner-details'>Start with Your Dream TECH Job.</p>
                </div>
                <div className="banner-image">
                    <img className='person-image' src="/person.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;