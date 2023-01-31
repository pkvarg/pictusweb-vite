import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, OurProjects, About, Gdpr, TradeRules } from './pages'
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
        <Route path='/gdpr' element={<Gdpr />} />
        <Route path='/trade-rules' element={<TradeRules />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
