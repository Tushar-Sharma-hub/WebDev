import { useState } from 'react'
import './App.css'
import { Routes,Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import About from './components/About'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import MainHeader from './components/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink> {/* With using navlink we can get what s the current path in the website as it attach class active to whichever path is selected */}
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/> {/* Index is used for default route. */}
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="*" element={<NotFound/>}/>{/* Path agr kisi se bhi match ni hua toh ye element jayga. */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
