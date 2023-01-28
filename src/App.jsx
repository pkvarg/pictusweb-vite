import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='hero-gradient2'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
