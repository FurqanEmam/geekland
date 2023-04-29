import React from 'react';
import './FeaturedJob.css'
import Details from '../Details/Details';
import { Link } from 'react-router-dom';

const FeaturedJob = ({moreData}) => {
    return (
        <div className='featured-main-container'>
            <div className='featured-container'>
                <img src={moreData.companyLogo} alt="Logo $" />
                <h4>{moreData.jobTitle}</h4>
                <p>{moreData.companyName}</p>
                <div>
                    <button>{moreData.remoteOrOnsite}</button><button>Full Time</button>
                </div>
                <div>
                    <p>{moreData.location}</p>
                    <p>{moreData.salary}</p>
                </div>  
            
                <button className='see-more-btn'> <Link to={`/details/${moreData.id}`}>View Details $</Link> </button>
            </div>
        </div>
    );
};

export default FeaturedJob;