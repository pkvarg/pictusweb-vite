import { useState, useRef } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, OurProjects, About, Gdpr, TradeRules } from './pages'
import { ScrollToTop } from './components'
import './App.css'

function App() {
  //localStorage.clear()
  const [language, setLanguage] = useState('slovak')
  //window.localStorage.setItem('language', JSON.stringify(language))
  const ref = useRef(null)

  const handleRomanian = () => {
    setLanguage('romanian')
  }

  return (
    <BrowserRouter>
      <div className='relative'>
        <button
          onClick={() => setLanguage('english')}
          className='mr-3 absolute text-white top-[7.5rem] left-[1rem] lg:top-[22.5px] lg:left-[45%] text-[30px]'
        >
          <img
            className='w-[3rem] lg:w-[3rem]'
            src='/english.png'
            alt='english'
          />
        </button>

        <button
          onClick={() => setLanguage('slovak')}
          className='mr-3 absolute text-white top-[7.5rem] left-[6rem] lg:top-[22.5px] lg:left-[50%] text-[30px]'
        >
          <img
            className='w-[3rem] lg:w-[3rem]'
            src='/slovak.png'
            alt='slovak'
          />
        </button>
        <button
          onClick={() => handleRomanian()}
          className='mr-3 absolute text-white top-[7.5rem] left-[11rem] lg:top-[22.5px] lg:left-[55%] text-[30px]'
        >
          <img
            className='w-[3rem] lg:w-[3rem]'
            src='/romanian.png'
            alt='romanian'
          />
        </button>
      </div>
      <div className='relative'></div>
      <Routes>
        <Route path='/' element={<Home language={language} />} />
        <Route path='/projects' element={<OurProjects language={language} />} />
        <Route path='/about' element={<About />} />
        <Route path='/gdpr' element={<Gdpr />} />
        <Route path='/trade-rules' element={<TradeRules />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
