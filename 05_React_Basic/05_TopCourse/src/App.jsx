import React from "react";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App=()=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [category,setCategory]=useState(filterData[0].title);

    async function fetchData(){ //fetch data from api
        setLoading(true); //set loading to true bcz we are fetching data
        try{
            const response=await fetch(apiUrl); //fetch data from apiUrl
            const output=await response.json(); //convert response to json
            setData(output.data); //set data to state
        }catch(error){
            toast.error("Error fetching data");
        }
        setLoading(false); //set loading to false bcz we have fetched data
    }

    useEffect(()=>{ 
        fetchData();
    },[]);

    return(
        <div className="min-h-screen flex flex-col bg-black/60">
            <div>
                <Navbar/>
            </div>
            <div>
                <div>
                    <Filter filterData={filterData} category={category} setCategory={setCategory}/>
                </div>
                <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
                    {loading ? (<Spinner/>) : <Cards data={data} category={category}/>} {/*if loading is true then show spinner else show cards*/}
                </div>
            </div>
        </div>
    )
}
export default App;