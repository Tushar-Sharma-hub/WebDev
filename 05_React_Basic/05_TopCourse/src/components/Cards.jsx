import React from 'react'
import Card from './Card';
import { useState } from 'react';

function Cards(props) {
    let data=props.data;
    // console.log("Cards component")
    // console.log(data)
    // the data is in form of key value pair and we have to convert it into array of objects
    const [likedCourses,setLikedCourses]=useState([]);
    let category=props.category;
    function getCourses(){
        if(category==="All"){
            let allCourses=[];
            Object.values(data).forEach(array=>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else{
            return data[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map(course=>{
                    return(
                        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                    )
                })
            }
        </div>
    )
}

export default Cards
