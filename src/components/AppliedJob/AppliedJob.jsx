import React from 'react';
import './AppliedJob.css'
import { Link } from 'react-router-dom';

const AppliedJob = ({ appliedJobInfo }) => {
    const { id, companyLogo, jobTitle, companyName, location, salary, remoteOrOnsite } = appliedJobInfo
    console.log(appliedJobInfo)
    return (
        <div className='container'>

            <div className='job-container'>
                <div className='image-container'>
                    <img className='logo' src={companyLogo} alt="" />
                </div>
                <div className='job-info-container'>
                    <h5 className='title'>{jobTitle}</h5>
                    <p className='company-name'>{companyName}</p>
                    <p className='remote-or-onsite'>{remoteOrOnsite}</p>
                    <div>
                        <p className='location'>{location}</p>
                        <p className='salary'>{salary}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${id}`}><button
                        className='btn-view-details'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;