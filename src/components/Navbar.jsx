import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from './../motion'
import styles from '../styles'
import { Link } from 'react-scroll'
import Translation from '../components/Languages/Data.json'
import { useStateContext } from '../context/StateContext'
import LanguageBar from './LanguageBar'

const Navbar = () => {
  const { language, setLanguage } = useStateContext()

  const handleLanguage = (lang) => {
    setLanguage(lang)
  }

  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'romanian') {
      setContent(Translation.romanian)
    }
  })
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <nav className='w-full text-white nav-font'>
        <div className='justify-between px-4 mx-auto lg:max-w-[90%] md:items-center md:flex md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              <a className='text-[2.05rem]' href='/'>
                &#60;&#47;&#62; PICTUSWEB development
              </a>
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-10'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li>
                  <Link
                    to='offer'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-[2.05rem] hover:text-dark-red'
                  >
                    {content.navbarOffer}
                  </Link>
                </li>
                <li>
                  <a
                    href='/projects'
                    className='text-[2.05rem] hover:text-dark-red'
                  >
                    {content.navbarProjects}
                  </a>
                </li>

                <li>
                  <Link
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-[2.05rem] hover:text-dark-red'
                  >
                    {content.navbarContact}
                  </Link>
                </li>

                <li>
                  {/* {language == 'slovak' && (
                    <button
                      onClick={() => handleLanguage('english')}
                      className='mr-3 text-white text-[30px]'
                    >
                      <img
                        className='w-[120%]'
                        src='/english.webp'
                        alt='english'
                      />
                    </button>
                  )}
                  {language == 'english' && (
                    <button
                      value='slovak'
                      onClick={() => handleLanguage('slovak')}
                      className='mr-3 text-[30px]'
                    >
                      <img
                        className='w-[120%]'
                        src='/slovak.webp'
                        alt='slovak'
                      />
                    </button>
                  )} */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LanguageBar />
      </nav>
      {/* <div className='relative'>
        <button
          onClick={() => handleLanguage('english')}
          className='mr-3 absolute text-white top-[0rem] left-[1rem] lg:top-[-65px] lg:left-[45%] text-[30px]'
        >
          <img
            className='w-[3rem] lg:w-[3rem]'
            src='/english.webp'
            alt='english'
          />
        </button>

        <button
          onClick={() => handleLanguage('slovak')}
          className='mr-3 absolute text-white top-[0rem] left-[6rem] lg:top-[-65px] lg:left-[50%] text-[30px]'
        >
          <img
            className='w-[3rem] lg:w-[3rem]'
            src='/slovak.webp'
            alt='slovak'
          />
        </button>
        <button
          onClick={() => handleLanguage('romanian')}
          className='mr-3 absolute text-white top-[0rem] left-[11rem] lg:top-[-65px] lg:left-[55%] text-[30px]'
        >
          <img
            className='w-[3rem] lg:w-[3rem]'
            src='/romanian.webp'
            alt='romanian'
          />
        </button>
      </div> */}
    </>
  )
}

export default Navbar
