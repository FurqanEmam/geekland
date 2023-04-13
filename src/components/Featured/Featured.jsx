import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './Featured.css'

const Featured = () => {
    const [featuredJob, setFeaturedJob] = useState([]);
    useEffect(() => {
        fetch('/jobData.json')
        .then(res => res.json())
        .then(data => setFeaturedJob(data))
    },[])
    return (
        <div>
            <div>
                <h1 className='featured-title'>Featured Jobs</h1>
                <p className='featured-text'>These Jobs are open now, explore the jobs and find your matching. Jobs makes your more confident.</p>
            </div>
            <div className='featured-main-container'>
                {
                    featuredJob.map(jobData => <FeaturedJob
                    key={jobData.id}
                    jobData = {jobData}
                    ></FeaturedJob>)
                }
            </div>
            <div>
                <button className='see-more-btn'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;