import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, OurProjects, About } from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* <div className='hero-gradient'>
      </div>
        <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<OurProjects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
