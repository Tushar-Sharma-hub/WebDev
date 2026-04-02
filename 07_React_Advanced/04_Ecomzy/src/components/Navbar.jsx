import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className='flex justify-between'>
                <NavLink to="/">
                    <div>
                        <img src="" alt="" />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div>
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/cart">
                    <div>
                        <FaShoppingCart />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
