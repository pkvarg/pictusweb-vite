import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Navbar } from './components'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
