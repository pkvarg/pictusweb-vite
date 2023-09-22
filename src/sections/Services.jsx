import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Translation from '../components/Languages/Data.json'

const Services = ({ language }) => {
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

  return (
    <div className='text-white lg:pb-[120px]'>
      <div className='lg:border border-white border-3 rounded-[15px] mt-0 lg:mt-[120px] lg:max-w-[75%] mx-auto'>
        <h1 className='lg:text-[2.5rem] text-[2.5rem] text-center mt-20'>
          {content.servicesTitle}
        </h1>
        <div className='flex lg:flex-row flex-col items-center py-16'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 5 }}
          >
            <div className='lg:w-[35rem] ml-[5%]'>
              <img className='lg:w-[90%]' src='/design.webp' alt='services' />
            </div>
          </motion.div>

          <div className='lg:w-[50%] lg:mr-[5%] pl-[5%] flex flex-col lg:mt-0 mt-20 lg:gap-0 gap-20 mx-4 lg:mx-0'>
            <div className='flex flex-row items-center gap-3 mt-8'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.webp'
                alt='service'
              />
              <h3 className='text-[2rem] pt-[18px]'>
                {content.servicesLogoTitle}
              </h3>
            </div>
            <div>
              <p className='text-[1.5rem] -mt-8 lg:mt-0'>
                {content.servicesLogoDesc}
              </p>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.webp'
                alt='service'
              />
              <h3 className='text-[2rem] mt-[18px]'>
                {' '}
                {content.servicesStyleTitle}
              </h3>
            </div>
            <div>
              <p className='text-[1.5rem] -mt-8 lg:mt-0'>
                {content.servicesStyleDesc}
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className='flex lg:flex-row flex-col items-center py-16 mx-4 lg:mx-0'>
          <div className='lg:w-[50%] pl-[5%] flex flex-col lg:gap-0 gap-20'>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.webp'
                alt='service'
              />
              <h3 className='text-[2rem] mt-[18px]'>
                {' '}
                {content.servicesNonStopTitle}
              </h3>
            </div>
            <div>
              <p className='text-[1.5rem] -mt-8 lg:mt-0'>
                {content.servicesNonStopDesc}
              </p>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <img
                className='lg:w-[5%] lg:flex hidden'
                src='/service-check.webp'
                alt='service'
              />
              <h3 className='text-[2rem] mt-[18px]'>
                {' '}
                {content.servicesAwayTitle}
              </h3>
            </div>
            <div>
              <p className='text-[1.5rem] -mt-8 lg:mt-0'>
                {content.servicesAwayDesc}
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 5 }}
          >
            <div className='lg:w-[35rem] lg:ml-[14.5%]'>
              <img
                className='lg:w-[75%] lg:mt-0 mt-20'
                src='/server.webp'
                alt='server'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
