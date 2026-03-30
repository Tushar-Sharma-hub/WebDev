import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useEffect,useContext } from 'react'
import { AppContext } from './context/AppContext'
function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts(1);
  },[])
  return (
    <div className="container mx-auto p-4">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
