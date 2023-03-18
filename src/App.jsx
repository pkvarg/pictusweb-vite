import { useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Home,
  OurProjects,
  About,
  Gdpr,
  TradeRules,
  Counter,
  ErrorPage,
} from './pages'
import { ScrollToTop } from './components'
import './App.css'
import { StateContext } from './context/StateContext'
import ReactGA from 'react-ga'
const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const ref = useRef(null)

  return (
    <BrowserRouter>
      <StateContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/en' element={<Home />} />
          <Route path='/projects' element={<OurProjects />} />
          <Route path='/about' element={<About />} />
          <Route path='/gdpr' element={<Gdpr />} />
          <Route path='/trade-rules' element={<TradeRules />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <ScrollToTop />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
