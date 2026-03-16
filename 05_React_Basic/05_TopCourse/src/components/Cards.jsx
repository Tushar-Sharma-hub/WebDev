import React from 'react'
import Card from './Card';

function Cards(props) {
    let data=props.data;
    // console.log("Cards component")
    // console.log(data)
    // the data is in form of key value pair and we have to convert it into array of objects
    function getCourses(){
        let allCourses=[];
        Object.values(data).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            });
        });
        return allCourses;
    }
    return (
        <div>
            {
                getCourses().map(course=>{
                    return(
                        <Card key={course.id} course={course} />
                    )
                })
            }
        </div>
    )
}

export default Cards
