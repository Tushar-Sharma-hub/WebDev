//Custom Hooks

import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'
function App() {

  return (
    <div className='w-full h-full flex flex-col background items-center'>
      <h1 className='bg-white rounded-4xl font-bold text-4xl mt-10 w-11/12 text-center px-10 py-2'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
