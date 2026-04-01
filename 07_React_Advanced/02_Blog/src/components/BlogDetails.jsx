import React from 'react'
import { NavLink } from 'react-router-dom';
function BlogDetails({post}) {
    return (
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <NavLink to={`/blog/${post.id}`} className="text-2xl font-semibold text-slate-950 hover:text-sky-600">
                {post.title}
            </NavLink>
            <div className="mt-3 text-sm text-slate-500">
                <p>
                    By <span className="font-medium text-slate-700">{post.author}</span>
                    <span className="mx-1">•</span>
                    on{' '}
                    <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className="text-sky-600 hover:text-sky-700">
                        {post.category}
                    </NavLink>
                </p>
                <p className="mt-1">Posted on <span className="font-medium text-slate-700">{post.date}</span></p>
            </div>
            <p className="mt-5 text-slate-700 leading-7">{post.content}</p>
            <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag,index)=>(
                    <NavLink
                        key={index}
                        to={`/tags/${tag.replaceAll(" ","-")}`}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-sky-100"
                    >
                        #{tag}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails
