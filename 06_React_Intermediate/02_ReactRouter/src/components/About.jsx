import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate=useNavigate();
    function goBack(){
        navigate(-1);
    }
    return (
        <div>
            <div>This is About page.</div>
            <button onClick={goBack}>Go back</button>
        </div> 
    )
}

export default About
