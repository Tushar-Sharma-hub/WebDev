import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
