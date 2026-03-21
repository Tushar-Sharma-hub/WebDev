import React from 'react'
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate=useNavigate();
    function moveHome(){
        navigate("/");
    }
    return (
        <div>
            <div>Not Found</div>
            <button onClick={moveHome}>Move to Home</button>
        </div>
    )
}

export default NotFound
