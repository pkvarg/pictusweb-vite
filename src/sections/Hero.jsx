import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='flex lg:flex-row flex-col justify-center items-center mx-[10%] py-[100px]'>
        <div className='flex flex-col justify-left lg:w-[50%]'>
          <h1 className='text-white text-[7rem]'>Weby.</h1>
          <h1 className='text-white text-[70px] mb-[3rem]'>Eshopy.</h1>
          <h1 className='text-white text-[60px]'>Moderné technológie.</h1>
        </div>
        <div className='lg:w-[50%]'>
          <img
            className='w-[100%] ml-auto lg:mt-0 mt-[12rem]'
            src='/hero-builders.png'
            alt='hero'
          />
        </div>
      </div>
    </>
  )
}

export default Hero
