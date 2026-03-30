// Context is a way to pass data through the component tree without having to pass props down manually at every level. 
// It is used to share data that can be considered "global" for a tree of React components, 
// such as the current authenticated user, theme, or preferred language.
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();

export default function AppContextProvider({children}){ //here children denotes that is listed under the tag in main.jsx which is app.jsx
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    //data filling 
    async function fetchBlogPosts(page){
        setLoading(true);
        try {
            const response=await fetch(`${baseUrl}?page=${page}`); //base url and adding page number.
            const data=await response.json();
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log(error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider> //here children is app components and we are passing value to it which is an object containing all the states and their setters 
}