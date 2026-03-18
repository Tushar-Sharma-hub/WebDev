import Testimonials from "./components/Testimonials"
import reviews from "./data"

function App() {

  return (
    <div className="flex flex-col w-screen h-screen justify-center bg-gray-300 ">

      <div className="text-center">

        <h1 className="text-4xl font-bold">Our Testimonials</h1>

        <div className="bg-violet-400 h-[4px] w-1/11 mt-1 m-auto"></div>

        <Testimonials reviews={reviews} />

      </div>

    </div>
  )
}

export default App
