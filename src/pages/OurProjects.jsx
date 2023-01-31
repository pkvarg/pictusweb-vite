import React from 'react'
// import Navbar from '../components/Navbar'

const OurProjects = () => {
  return (
    <>
      <div className='hero-gradient text-white flex flex-col justify-center items-center gap-20'>
        {/* <Navbar /> */}
        <h1 className='text-[56px] pt-20'>Realizované projekty</h1>
        <img
          className='w-[75%] h-auto'
          src='/js-web.png'
          alt='js-web-development'
        />
        <h1 className='text-[35px]'>
          V našich projektoch používame moderné technológie založené na jazyku
          Javascript.
        </h1>
        <div className='flex lg:flex-row flex-col items-center justify-center gap-20'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[30px]'>Prezentačný web</h2>
            <h3 className='text-[25px]'>v základnej cene</h3>
          </div>
          <img
            className='w-[30%]'
            src='/ioana-page.png'
            alt='ioana-illustrations.eu'
          />
        </div>
        <div className='flex flex-row justify-center items-center'></div>
        <h1>Technológie</h1>
      </div>
    </>
  )
}

export default OurProjects
