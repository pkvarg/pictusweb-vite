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
import { firebaseConfig } from './firebaseConfig'
import { initializeApp } from 'firebase/app'

export const app = initializeApp(firebaseConfig)

function App() {
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
