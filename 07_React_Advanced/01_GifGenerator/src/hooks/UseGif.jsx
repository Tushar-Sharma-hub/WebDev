//Custom hook it will return gif,loading,fetchdata/
import axios from 'axios';
import { useEffect,useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function UseGif() {
    const [gif,setGif]=useState(null);
    const [loading,setLoading]=useState(false);

    async function fetchData(tag){
        setLoading(true);
        const {data}=await axios.get(tag?  `${url}&tag=${tag}`:url); 
        const imageSource=data.data.images.downsized_large.url; //we can check the data coming from url then decide what to fetch.
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return{gif,loading,fetchData }
}

export default UseGif
