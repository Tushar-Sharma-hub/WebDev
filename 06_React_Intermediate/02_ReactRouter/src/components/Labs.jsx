import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
    const navigate=useNavigate();
    function moveHome(){
        navigate("/");
    }
    return (
        <div>
            <div>This is labs page.</div>
            <button onClick={moveHome}>Move to Home</button>
        </div>
    )
}

export default Labs
