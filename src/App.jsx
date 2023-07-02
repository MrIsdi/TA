import React from 'react'
import Navbar from './components/Navbar'
import bg from "./assets/bg.png"
import Home from './components/Home'
import About from './components/About'
import Enviroment from './components/Enviroment'
import Detection from './components/Detection'
import Footer from './components/Footer'

function App() {
  document.body.style.background = `url(${bg})`
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Enviroment />
      <Detection />
      <Footer />
    </React.Fragment>
  )
}

export default App
