import React from 'react';
import './CategoryPost.css'

const CategoryPost = ({ postData }) => {
    return (
        <div>
            <div className='post-container'>
                <div className='post'>
                    <img className='post-icons' src={postData.logoUrl} alt="icons $" />
                    <h5 className='category'>{postData.jobCategory}</h5>
                    <p className='jobs-available'>{postData.jobsAvailable}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryPost;