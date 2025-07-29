import { useState } from 'react'  
import {Routes , Route, Router} from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'

function App() {
  const [count, setCount] = useState(0)


  return (
   <>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/services" element={ <Services/>} />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
   </>
  )
}

export default App
