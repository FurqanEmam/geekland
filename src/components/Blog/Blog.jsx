import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='main-ques-container'>
            <div className='question-container'>
                <div className='single-question-container'>
                    <p>when should you use context API?</p>
                    <p>If i need to do prop drilling and write so many codes, instead of doing so i can use context API and get my desired data.</p>
                </div>
                <div className='single-question-container'>
                    <p>what is custom hook?</p>
                    <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. </p>
                </div>
                <div className='single-question-container'>
                    <p>what is useRef?</p>
                    <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
                </div>
                <div className='single-question-container'> 
                    <p>what is useMemo?</p>
                    <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog; <h1>Blogs here</h1>