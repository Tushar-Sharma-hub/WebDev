import './App.css'
import Card from './components/Card.jsx'

function App() {
  let arr=["DSA","CODING","MERN STACK"]
  return (
    <>

      <h1 className='bg-green-300 text-black border-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card username="Tushar Sharma" desc="I am doing DSA with C++ and MERN stack for development." hashtags={arr}/>
      <Card username="Random" hashtags={arr}/>
    </>
  )
}

export default App
