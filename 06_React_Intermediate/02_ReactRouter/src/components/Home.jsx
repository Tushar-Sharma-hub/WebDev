import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate=useNavigate();

    function moveLabs(){
        navigate("/labs")
    }
    function moveAbout(){
        navigate("/about")
    }
    function moveSupport(){
        navigate("/support")
    }
    return (
        <div>
            <div>
                This is home page boy.
            </div>
            <br></br>
            <button onClick={moveLabs}>Move to Labs</button>
            <br></br>
            <button onClick={moveAbout}>Move to About</button>
            <br></br>
            <button onClick={moveSupport}>Move to Support</button>
        </div>
    )
}

export default Home;
