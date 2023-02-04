import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, OurProjects, About, Gdpr, TradeRules } from './pages'
import { ScrollToTop } from './components'
import './App.css'

function App() {
  // let lng = JSON.parse(window.localStorage.getItem('language'))
  const [language, setLanguage] = useState('slovak')

  const handleLanguage = (language) => {
    setLanguage(language)
    window.localStorage.setItem('language', JSON.stringify(language))
  }

  return (
    <BrowserRouter>
      <div className='relative'>
        {language == 'slovak' && (
          <button
            onClick={() => handleLanguage('english')}
            className='mr-3 absolute text-white top-[8rem] left-[2rem] lg:top-[30px] lg:left-[50%] text-[30px]'
          >
            <img className='w-[120%]' src='/english.png' alt='english' />
          </button>
        )}
        {language == 'english' && (
          <button
            onClick={() => handleLanguage('slovak')}
            className='mr-3 absolute text-white top-[8rem] left-[2rem] lg:top-[30px] lg:left-[50%] text-[30px]'
          >
            <img className='w-[120%]' src='/slovak.png' alt='slovak' />
          </button>
        )}
      </div>
      <Routes>
        <Route path='/' element={<Home language={language} />} />
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
