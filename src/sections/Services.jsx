import React from 'react'
const Services = () => {
  return (
    <div className='text-white py-[120px]'>
      <h1 className='text-[4.5rem] text-center'>
        Weby, ktoré Vám prinesú úspech
      </h1>
      <div className='border border-white border-3 rounded-[15px] mt-[120px] max-w-[75%] mx-auto'>
        <div className='flex lg:flex-row flex-col items-center py-16'>
          <div className='w-[50%] ml-[10%]'>
            <img className='w-[60%]' src='/design.png' alt='services' />
          </div>

          <div className='w-[50%] mr-[5%] flex flex-col'>
            <div className='flex flex-row items-center gap-3'>
              <img className='w-[5%]' src='/service-check.png' alt='service' />
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
              <img className='w-[5%]' src='/service-check.png' alt='service' />
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
          <div className='w-[50%] ml-[5%] flex flex-col'>
            <div className='flex flex-row items-center gap-3'>
              <img className='w-[5%]' src='/service-check.png' alt='service' />
              <h3 className='text-[3rem] mt-[18px]'>Non-stop prevádzka webu</h3>
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
              <img className='w-[5%]' src='/service-check.png' alt='service' />
              <h3 className='text-[3rem] mt-[18px]'>Keď nie ste na príjme</h3>
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
          <div className='w-[50%] ml-[12.5%]'>
            <img className='w-[75%]' src='/server.png' alt='server' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
