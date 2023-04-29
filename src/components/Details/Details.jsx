import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const detailsData = useLoaderData()
    console.log(detailsData);
    return (
        <div className='job-details-container'>
            <div className='details-container'>
                <div className="job-text">
                    <p> <span className='bold-text'>Job Description: </span> {detailsData.jobDescription}</p>
                    <p><span className='bold-text'>Job Responsibility: </span>{detailsData.jobResponsibility}</p>
                    <p className='bold-text'>Educational Requirements:</p>
                    <p>{detailsData.educationalRequirements}</p>
                    <p className='bold-text'>Experiences:</p>
                    <p>{detailsData.experiences}</p>
                </div>
                <div className="job-info">
                    <h4>Job Details</h4>
                    <hr />
                    <p><span className='bold-text'>Salary: </span>{detailsData.salary}</p>
                    <p><span className='bold-text'>Job Title: </span>{detailsData.jobTitle}</p>
                    <h4>Contact Informations</h4>
                    <hr />
                    <p><span className='bold-text'>Phone: </span>{detailsData.phone}</p>
                    <p><span className='bold-text'>Email: </span>{detailsData.email}</p>
                    <p><span className='bold-text'>Address: </span>{detailsData.location}</p>
                    <button className='btn-apply-now'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details; 