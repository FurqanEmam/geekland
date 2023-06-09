import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import CategoryPost from '../CategoryPost/CategoryPost';
import './Category.css'

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
                <h3 className='job-list'>Job Category List</h3>
                <p className='job-text'>To make a great future, explore these jobs and their informations to match your own criteria.</p>
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