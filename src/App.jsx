import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, OurProjects, About, Gdpr, TradeRules } from './pages'
import { ScrollToTop } from './components'
import './App.css'

function App() {
  //localStorage.clear()
  const [language, setLanguage] = useState('slovak')
  window.localStorage.setItem('language', JSON.stringify(language))

  const handleLanguage = (lng) => {
    setLanguage(lng)
    window.localStorage.setItem('language', JSON.stringify(lng))
  }

  return (
    <BrowserRouter>
      <div className='relative'>
        {language == 'slovak' && (
          <button
            onClick={() => handleLanguage('english')}
            className='mr-3 absolute text-white top-[7rem] left-[15px] lg:top-[22.5px] lg:left-[50%] text-[30px]'
          >
            <img
              className='w-[14.5%] lg:w-[3rem]'
              src='/english.png'
              alt='english'
            />
          </button>
        )}
        {language == 'english' && (
          <button
            onClick={() => handleLanguage('slovak')}
            className='mr-3 absolute text-white top-[7rem] left-[15px] lg:top-[22.5px] lg:left-[50%] text-[30px]'
          >
            <img
              className='w-[18.5%] lg:w-[3.25rem]'
              src='/slovak.png'
              alt='slovak'
            />
          </button>
        )}
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
