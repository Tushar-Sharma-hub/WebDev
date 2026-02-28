import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 bg-red-600 text-white font-bold rounded-2xl shadow-lg hover:bg-red-500'>
            Red
          </button>
          <button onClick={()=>setColor("green")}
          className='outline-none px-4 bg-green-600 text-white font-bold rounded-2xl shadow-lg hover:bg-green-500'>
            Green
          </button>
          <button onClick={()=>setColor("blue")}
          className='outline-none px-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-500'>
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
