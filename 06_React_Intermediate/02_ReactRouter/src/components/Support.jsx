import React from 'react'
import { useNavigate } from 'react-router-dom';
function Support() {
    const navigate=useNavigate();
    function moveHome(){
        navigate("/");
    }
    return (
        <div>
            <div>This is Support page.</div>
            <button onClick={moveHome}>Move to Home</button>
        </div>
    )
}

export default Support
