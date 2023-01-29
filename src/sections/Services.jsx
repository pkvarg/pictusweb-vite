import React from 'react'
const Services = () => {
  return (
    <div className='text-white py-[120px]'>
      <h1 className='text-[4.5rem] text-center'>
        Weby, ktoré Vám prinesú úspech
      </h1>
      <div className='border border-white border-3 rounded-[15px] mt-[120px] max-w-[75%] mx-auto'>
        <div className='flex lg:flex-row flex-col items-center '>
          <div className='w-[50%] ml-[10%]'>
            <img className='' src='/services.png' alt='services' />
          </div>

          <div className='w-[50%] mr-[5%] flex flex-col'>
            <div className='flex flex-row items-center gap-3'>
              <img className='w-[5%]' src='/service-check.png' alt='service' />
              <h3 className='text-[3rem] mt-[18px]'>Jedinečné logo</h3>
            </div>
            <div>
              <p className='text-[2rem]'>
                Vytvoríme Vám jedinečné logo, použiteľné na webstránke, v
                podpise emailu či vizitke.
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
                Chcete prezentovať svoje služby, hobby alebo robiť vážny biznis?
                Na štýle záleží.
              </p>
              {/* <p className='text-[2rem]'>
                
              </p> */}
            </div>
          </div>
        </div>

        {/* <div className=''>
          <img className='w-[5%]' src='/service-check.png' alt='service' />
          <h3 className='text-[30px] mt-[18px]'>Non-stop prevádzka webu</h3>
        </div>
        <div>
          <p className='text-[20px]'>Garantujeme rýchly a spoľahlivý web</p>
          <p className='text-[20px]'>fungujúci na PC, mobile aj tablete.</p>
        </div>
        <div className=''>
          <img className='w-[5%]' src='/service-check.png' alt='service' />
          <h3 className='text-[30px] mt-[18px]'>Keď nie ste na príjme</h3>
        </div>
        <div>
          <p className='text-[20px]'>Samozrejmosťou je formulár, ktorý Vám</p>
          <p className='text-[20px]'>zabezbečí, že si správy od zákazníkov</p>
          <p>môžete nájsť priamo vo Vašej e-pošte.</p>
        </div> */}
      </div>
    </div>
  )
}

export default Services
