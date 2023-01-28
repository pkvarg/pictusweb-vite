import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='flex lg:flex-row flex-col justify-center gap-20 items-center mx-[10%] py-[100px]'>
        <div className='flex flex-col justify-left'>
          <h1 className='text-white text-[60px]'>Weby.</h1>
          <h1 className='text-white text-[60px]'>Eshopy.</h1>
          <h1 className='text-white text-[50px]'>Moderné technológie.</h1>
        </div>
        <div className=''>
          <img className='w-[72.5%]' src='/hero-builders2.png' alt='hero' />
        </div>
      </div>
    </>
  )
}

export default Hero
