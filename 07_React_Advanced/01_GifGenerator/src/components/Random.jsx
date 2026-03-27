import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Random() {
    // const [gif,setGif]=useState(null);
    // const [loading,setLoading]=useState(false);


    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data}=await axios.get(url); 
    //     const imageSource=data.data.images.downsized_large.url; //we can check the data coming from url then decide what to fetch.
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    const {gif,loading,fetchData}=UseGif();

    return (
        <div className='w-1/2 bg-green-400 rounded-2xl border border-gray-400 flex flex-col items-center
        gap-y-5 mt-[15px]'>
            <h1 className='text-2xl underline font-bold mt-3'>A Random Gif</h1>
            {
                loading?(<Spinner/>):(<img src={gif} width="450" /> )
            }
            <button onClick={()=>fetchData()}
            className='w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-3'>Generate</button>
        </div>
    )
} 

export default Random
