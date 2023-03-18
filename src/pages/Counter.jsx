import React, { useEffect } from 'react'
import Navbar from '../components/NavbarProjects'
import { useStateContext } from '../context/StateContext'

const Counter = () => {
  const { botsCount } = useStateContext()

  return (
    <>
      <div className='second-gradient text-white h-[100vh]'>
        <Navbar />
        <div className='p-8' id='counter'>
          Bots unsuccessful:
        </div>
      </div>
    </>
  )
}

export default Counter
