import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './error.css'

const Error = () => {
    const {error, status} = useRouteError();
    console.log(error, status)
    return (
        <div className='error-container'>
            <img className='error-img' src="/error.png" alt="" />
            <p className='error-message'>{error.message}</p>
            <button className='btn-to-home'>
                <Link to='/'>Back to Homepage.</Link>
            </button>
        </div>
    );
};

export default Error;