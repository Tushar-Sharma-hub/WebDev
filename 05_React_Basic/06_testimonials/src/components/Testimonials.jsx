import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
function Testimonials(props) {
    const reviews = props.reviews;
    const [index,setIndex]=useState(0);

    function leftShiftHandler(){
        if(index-1<0) setIndex(reviews.length-1);
        else setIndex(index-1);
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length) setIndex(0);
        else setIndex(index+1);
    }
    function surpriseHandler(){
        let ranIdx = Math.floor(Math.random() * reviews.length);
        setIndex(ranIdx);
    }
    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center text-center 
        mt-10 p-10 transition-all duration-700 mx-auto hover:shadow-xl rounded-md'>
            <Card review={reviews[index]}/>
            <div className='flex text-2xl mt-5 gap-3 text-violet-400 font-bold m-auto'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}>
                    <FaChevronLeft/>
                </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}>
                    <FaChevronRight/>
                </button>
            </div>
            <div>
                <button className='text-white bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 font-bold mt-5 mb-1' onClick={surpriseHandler}>
                    Surprise me
                </button>
            </div>
        </div>
    )
}

export default Testimonials
