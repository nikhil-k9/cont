import React, {useState, useEffect, Suspense } from 'react'
import RedditCard from './RedditCard';
// import { lazy } from 'react';

// const RedditCard = lazy(()=>import("./RedditCard"))
const MainApi = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
        'https://www.reddit.com/r/reactjs.json',
        );
        const data = await response.json();
        setData(data.data.children);
    };

    
    useEffect(() => {
        fetchData();     
    },[]);
  return (
    <>
    <Suspense fallback={<div className='text-slate-100 text-center text-3xl'>Loading...</div>}>
    <div>
      <h1 className='text-3xl font-extrabold leading-none tracking-tight text-[#F2F4F5] md:text-4xl lg:text-5xl text-center m-3 md:m-6 lg:m-10'>Reddit API - Contenterra</h1>
    </div>
    
    <RedditCard data={data}/>
    </Suspense>
    </>
  )
}

export default MainApi