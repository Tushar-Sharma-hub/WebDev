import React, { use, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
function Blogs() {
    //consume data from context
    const {loading,posts}=useContext(AppContext);
    return (
        <div className='mt-3 mb-3'>
            {
                loading? (<Spinner/>) : ( //loading true h spinner dikha do ni toh posts ki length dekho.
                    posts.length===0?
                    (
                        <div>
                            <p>No post found.</p>
                        </div>
                    ):
                    (
                        posts.map((post)=>(
                            <BlogDetails key={post.id} post={post}/>
                        ))
                    )
                )
            }
            <div className='border-b-2 border-gray-300 shadow-sm mt-3'></div>
        </div>
    )
}

export default Blogs
