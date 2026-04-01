import React, { use, useContext, useState } from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';
import { useEffect } from 'react';
function BlogPage() {
    const newBaseUrl="https://codehelp-apis.vercel.app/api/";
    const [blog,setBlog]=useState(null);
    const[relatedBlogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigate();
    const {loading,setLoading}=useContext(AppContext);
    const blogId=location.pathname.split("/").at(-1);

    async function fetchBlog(){
        setLoading(true);
        let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchBlog();
        }
    },[location.pathname]) //it will run the useEffect hook whenever the pathname changes. it will fetch the blog based on the current pathname.

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header/>
            <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <button
                    onClick={()=>navigation(-1)}
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                    ← Back
                </button>

                {loading ? (
                    <div className="flex min-h-[240px] items-center justify-center">
                        <Spinner/>
                    </div>
                ) : blog ? (
                    <div className="mt-8 space-y-10">
                        <BlogDetails post={blog}/>

                        <div>
                            <h2 className="text-2xl font-semibold text-slate-900 border-b border-slate-200 pb-3">
                                Related Blogs
                            </h2>
                            <div className="mt-6 space-y-6">
                                {relatedBlogs.map((post)=>(
                                    <BlogDetails key={post.id} post={post}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-20 rounded-3xl bg-white p-10 text-center shadow-sm">
                        <h2 className="text-2xl font-semibold text-slate-900">Blog Not Found</h2>
                        <p className="mt-3 text-slate-600">Please check the URL or select another post.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogPage
