import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('/jobCategory.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <h1>this is the homepage for geekland</h1>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;