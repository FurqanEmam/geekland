import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import './Applied.css'

const Applied = () => {
    
    const {appliedJobsInfo} = useLoaderData(); 
    console.log(appliedJobsInfo)
    return (
        <div>
            <div className='banner-applied-job'>
                <h1>Applied Jobs</h1>
            </div>
            {
                appliedJobsInfo.map(appliedJobInfo => <AppliedJob 
                key={appliedJobInfo.id}
                appliedJobInfo={appliedJobInfo}
                ></AppliedJob>)
            }
        </div>
    );
};

export default Applied;