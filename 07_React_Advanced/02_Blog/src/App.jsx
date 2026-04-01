import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useEffect,useContext } from 'react'
import { AppContext } from './context/AppContext'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'


function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams(); //it is used to get the query parameters from the url and set the query parameters in the url.Query parameters are the parameters that are passed in the url after the ? symbol. 
  // for example, in the url http://localhost:3000/?page=2, page is the query parameter and 2 is its value. we can get the value of the query parameter using searchParams.get('page') and we can set the value of the query parameter using setSearchParams({page:2})
  const location=useLocation(); //it is used to get the current location of the url. it returns an object containing the pathname, search, hash, state and key of the url.


  useEffect(()=>{
    const page=searchParams.get('page') || 1; //if there is no page query parameter in the url, then it will default to 1.
    if(location.pathname.includes("tags")){
      //tag page
      const tag=location.pathname.split("/").at(-1).replace("-"," "); //it will split the pathname by /tags/ and get the last element of the array which is the tag name.
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      //category page
      const category=location.pathname.split("/").at(-1).replace("-"," "); //it will split the pathname by /categories/ and get the last element of the array which is the category name.
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      //home page
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]) //it will run the useEffect hook whenever the pathname or searchParams changes. it will fetch the blog posts based on the current pathname and searchParams.


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/blog/:blogId' element={<BlogPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
    </Routes>
  )
}

export default App
