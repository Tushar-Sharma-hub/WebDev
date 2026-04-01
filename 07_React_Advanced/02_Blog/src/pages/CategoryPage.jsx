import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { useNavigate, useLocation } from 'react-router-dom';
function CategoryPage() {
    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
    return (
        <div>
            <Header/>
            <div className='flex gap-3 items-center mt-3'>
                <button onClick={()=>navigation(-1)} 
                className="items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100">&larr; Back</button>
                <h2 className='font-bold text-2xl '>
                    Blog on <span className='underline'>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default CategoryPage
