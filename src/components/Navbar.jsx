import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from './../motion'
import styles from '../styles'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <nav className='w-full text-white nav-font'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl items-center md:flex md:px-8 mx-6'>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <a className='text-[22.5px]' href='/'>
              &#60;&#47;&#62; PICTUSWEB development
              {/* <img
                  src='/logo.png'
                  alt='search'
                  className='w-[180px] h-[auto] object-contain'
                /> */}
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

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li>
                <Link
                  to='offer'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='text-[22.5px] hover:text-dark-red'
                >
                  Ponuka
                </Link>
              </li>
              <li>
                <Link
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={125}
                  duration={500}
                  className='text-[22.5px] hover:text-dark-red'
                >
                  Projekty
                </Link>
              </li>

              <li>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className='text-[22.5px] hover:text-dark-red'
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
