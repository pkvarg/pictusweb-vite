import React from 'react'
import { useStateContext } from '../context/StateContext'

const LanguageBar = () => {
  const { language, setLanguage } = useStateContext()

  const handleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className='relative flex flex-row gap-3 items-center translate-y-[7.5%]'>
      <button
        onClick={() => handleLanguage('english')}
        // className='mr-3 absolute text-white top-[0rem] left-[1rem] lg:top-[-65px] lg:left-[45%] text-[30px]'
        className=''
      >
        <img
          className='w-[3rem] md:w-[14rem] lg:w-[2rem]'
          src='/english.webp'
          alt='english'
        />
      </button>

      <button
        onClick={() => handleLanguage('slovak')}
        // className='mr-3 absolute text-white top-[0rem] left-[6rem] lg:top-[-65px] lg:left-[50%] text-[30px]'
      >
        <img
          className='w-[3rem] md:w-[14rem] lg:w-[2rem]'
          src='/slovak.webp'
          alt='slovak'
        />
      </button>
      <button
        onClick={() => handleLanguage('romanian')}
        // className='mr-3 absolute text-white top-[0rem] left-[11rem] lg:top-[-65px] lg:left-[55%] text-[30px]'
      >
        <img
          className='w-[3rem] md:w-[14rem] lg:w-[2rem]'
          src='/romanian.webp'
          alt='romanian'
        />
      </button>
    </div>
  )
}

export default LanguageBar
