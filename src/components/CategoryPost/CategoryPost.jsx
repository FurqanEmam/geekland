import React from 'react';

const CategoryPost = ({postData}) => {
    return (
        <div>
            <div>
                <img src={postData.logoUrl} alt="icons $" />
                <h5>{postData.jobCategory}</h5>
                <p>{postData.jobsAvailable}</p>
            </div>
        </div>
    );
};

export default CategoryPost;