import React from 'react';
import './FeaturedJob.css'

const FeaturedJob = ({jobData}) => {
    return (
        <div className='featured-main-container'>
            <div className='featured-container'>
                <img src={jobData.companyLogo} alt="Logo $" />
                <h4>{jobData.jobTitle}</h4>
                <p>{jobData.companyName}</p>
                <div>
                    <button>{jobData.remoteOrOnsite}</button><button>Full Time</button>
                </div>
                <div>
                    <p>{jobData.location}</p>
                    <p>{jobData.salary}</p>
                </div>  
                <button className='see-more-btn'>View Details $</button>
            </div>
        </div>
    );
};

export default FeaturedJob;