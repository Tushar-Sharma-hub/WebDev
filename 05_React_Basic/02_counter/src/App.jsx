import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-blue-500 text-2xl">Increment && Decrement</div>
      <div className='flex flex-row bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={() => setCount(count - 1)} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>
        <div className='text-center text-5xl w-20 font-bold'>
          {count}
        </div>
        <button onClick={() => setCount(count + 1)} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>
      <button onClick={() => setCount(0)} className='bg-red-500 text-white py-2 px-4 rounded-sm'>
        Reset
      </button>
      </div>
  )
}

export default App
