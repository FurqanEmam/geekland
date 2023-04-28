import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './Featured.css'

const Featured = () => {
    const [featuredJob, setFeaturedJob] = useState([]);
    useEffect(() => {
        fetch('/jobData.json')
            .then(res => res.json())
            .then(data => setFeaturedJob(data))
    }, [])

    const [showAll, setShowAll] = useState(false);

    const seeMoreData = featuredJob;
    console.log(seeMoreData);
    const handleSeeMoreClick = () => {
        setShowAll(true);
    }


    return (
        <div>
            <div>
                <h1 className='featured-title'>Featured Jobs</h1>
                <p className='featured-text'>These Jobs are open now, explore the jobs and find your matching. Jobs makes your more confident.</p>
            </div>

            <div className='featured-job-content'>
                {
                    seeMoreData.filter((_, index) => index < 4 || showAll).map(moreData => (<FeaturedJob
                        key={moreData.id}
                        moreData={moreData}
                    ></FeaturedJob>))
                }
            </div>
            <div>
                {
                    !showAll && (
                        <div className='see-more-btn-container'>
                            <button onClick={handleSeeMoreClick}
                                className='see-more-btn'>See All Jobs</button>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default Featured;