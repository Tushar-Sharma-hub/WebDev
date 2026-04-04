import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cart = useSelector((state) => state.cart);

    return (
        <div className="bg-white shadow-md sticky top-0 z-10">
            <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
                <NavLink to="/">
                    <div className="text-2xl font-bold text-slate-800">
                        Ecomzy
                    </div>
                </NavLink>
                <div className="flex items-center space-x-6">
                    <NavLink to="/" className="text-slate-700 hover:text-slate-900 transition-colors">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart" className="relative">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl text-slate-700 hover:text-slate-900 transition-colors" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
