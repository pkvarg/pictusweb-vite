import React from 'react'
const Services = () => {
  return (
    <div className='text-white lg:pb-[120px]'>
      <div className='lg:border border-white border-3 rounded-[15px] mt-[120px] lg:max-w-[75%] mx-auto'>
        <h1 className='lg:text-[4.5rem] text-[2.5rem] text-center mt-20'>
          Weby, ktoré Vám prinesú úspech
        </h1>
        <div className='flex lg:flex-row flex-col items-center py-16'>
          <div className='lg:w-[50%] ml-[5%]'>
            <img className='lg:w-[90%]' src='/design.png' alt='services' />
          </div>

          <div className='lg:w-[50%] lg:mr-[5%] pl-[5%] flex flex-col lg:mt-0 mt-20 lg:gap-0 gap-20'>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.png'
                alt='service'
              />
              <h3 className='text-[3rem] mt-[18px]'>Jedinečné logo</h3>
            </div>
            <div>
              <p className='text-[2rem]'>
                Logo použiteľné na webstránke, v podpise emailu či vizitke.
                Jedinečné. Vaše.
              </p>
              {/* <p className='text-[2rem]'>
               
              </p> */}
            </div>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.png'
                alt='service'
              />
              <h3 className='text-[3rem] mt-[18px]'>Štýl podľa vkusu</h3>
            </div>
            <div>
              <p className='text-[2rem]'>
                Prezentujete služby, hobby alebo vážny biznis? Na štýle záleží.
              </p>
              {/* <p className='text-[2rem]'>
                
              </p> */}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className='flex lg:flex-row flex-col items-center py-16'>
          <div className='lg:w-[50%] pl-[5%] flex flex-col lg:gap-0 gap-20'>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.png'
                alt='service'
              />
              <h3 className='text-[3rem] mt-[18px]'>Non-stop prevádzka</h3>
            </div>
            <div>
              <p className='text-[2rem]'>
                Rýchly a spoľahlivý web fungujúci na PC, mobile aj tablete.
                Non-stop.
              </p>
              {/* <p className='text-[2rem]'>
               
              </p> */}
            </div>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.png'
                alt='service'
              />
              <h3 className='text-[3rem] mt-[18px]'>Nie ste na príjme?</h3>
            </div>
            <div>
              <p className='text-[2rem]'>
                Formulár Vám zabezbečí, že správy od zákazníkov prídu vždy do
                Vašej e-pošty.
              </p>
              {/* <p className='text-[2rem]'>
                
              </p> */}
            </div>
          </div>
          <div className='lg:w-[50%] lg:ml-[14.5%]'>
            <img
              className='lg:w-[75%] lg:mt-0 mt-20'
              src='/server.png'
              alt='server'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
