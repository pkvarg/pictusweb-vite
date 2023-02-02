import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, OurProjects, About, Gdpr, TradeRules } from './pages'
import { ScrollToTop } from './components'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<OurProjects />} />
        <Route path='/about' element={<About />} />
        <Route path='/gdpr' element={<Gdpr />} />
        <Route path='/trade-rules' element={<TradeRules />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
