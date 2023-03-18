import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='hero-gradient h-[100vh] text-[#fff] flex flex-col justify-center items-center'>
      <h1 className='text-[45px]'>Oops! You seem to be lost.</h1>
      <p className='text-[30px]'>Here are some helpful links:</p>
      <div className='text-[25px] cursor-pointer flex flex-col mt-2'>
        <Link className='underline' to='/'>
          Home
        </Link>
        <Link className='underline' to='/projects'>
          Projects
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
