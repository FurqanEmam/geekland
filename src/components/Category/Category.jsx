import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryPost from '../CategoryPost/CategoryPost';

const Category = () => {
    const [categoryPost, setCategoryPost] = useState([]);


    useEffect(() => {
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setCategoryPost(data))
    }, []);




    return (
        <div>
            <div>
                <h3>Job Category List</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='category-container'>
                {
                    categoryPost.map(postData => <CategoryPost
                    key={postData.id}
                    postData={postData}
                    ></CategoryPost>)
                }
            </div>
        </div>
    );
};

export default Category;