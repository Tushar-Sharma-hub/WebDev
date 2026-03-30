import React, { use, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
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
                            <div key={post.id} className='m-2 p-3'>
                                <p className='font-bold text-amber-700 text-xl'>{post.title}</p>
                                <p className='text-gray-500 text-sm'>
                                    By <span>{post.author}</span> on <span>{post.category}</span>
                                </p>
                                <p className='text-gray-500 text-xs'>Posted on {post.date}</p>
                                <p className='text-black text-sm'>{post.content}</p>
                                <div>
                                    {post.tags.map((tag,index)=>(
                                        <span key={index} className=' text-blue-500 p-2 cursor-pointer hover:text-blue-700'>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))
                    )
                )
            }
            <div className='border-b-2 border-gray-300 shadow-sm mt-3'></div>
        </div>
    )
}

export default Blogs
