import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"

const App = () => {
  return (
    <div className="grad-bg">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-800 selection:text-white">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default App