import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    // const [category, setCategory] = useState([]);
    // useEffect(() => {
    //     fetch('/jobCategory.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;