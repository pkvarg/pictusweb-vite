import { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, OurProjects, About, Gdpr, TradeRules, Counter } from './pages'
import { ScrollToTop } from './components'
import './App.css'
import { StateContext } from './context/StateContext'

function App() {
  const ref = useRef(null)

  return (
    <BrowserRouter>
      <StateContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<OurProjects />} />
          <Route path='/about' element={<About />} />
          <Route path='/gdpr' element={<Gdpr />} />
          <Route path='/trade-rules' element={<TradeRules />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
        <ScrollToTop />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
