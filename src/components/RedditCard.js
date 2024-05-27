import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react'
import { lazy } from 'react';

const CardTemplate=lazy(()=>import("./CardTemplate"))

const RedditCard = (props) => {
const data=props.data;

  return (
    <div className='flex flex-col items-center justify-center gap-y-8 mt-5'>{data?.map(item=>(
        <Suspense fallback={<CircularProgress/>}>
        <CardTemplate key={item.data.id} >{item.data}</CardTemplate>
        </Suspense>
    ))}</div>
  )
}

export default RedditCard