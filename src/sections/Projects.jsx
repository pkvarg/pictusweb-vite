import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {
  const navigate = useNavigate()
  const toProjectsHandler = () => {
    navigate('/projects')
  }
  return (
    <div className='text-white pt-10' id='projects'>
      <h1 className='text-center text-[56px] mb-[120px]'>Projekty</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 3 }}
      >
        <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-2 gap-8 w-[90%] mx-auto'>
          <div className='flex flex-col gap-3'>
            <img
              className='w-[100rem] rounded-xl'
              src='/ioana-page.png'
              alt='ioana-illustrations.eu'
            />
            <h3 className='text-[35px] text-center'>ioana-illustrations.eu</h3>
          </div>
          <div className='flex flex-col gap-3'>
            <img
              className='w-[100rem] rounded-xl'
              src='/dvl-page.png'
              alt='kvalitnamontaz.eu'
            />
            <h3 className='text-[35px] text-center'>kvalitnamontaz.sk</h3>
          </div>
          <div className='flex flex-col gap-3'>
            <img
              className='w-[100rem] rounded-xl'
              src='/prud-page.png'
              alt='prud.sk'
            />
            <h3 className='text-[35px] text-center'>prud.sk</h3>
          </div>
        </div>
      </motion.div>
      <div className='flex justify-center'>
        <button
          className='text-[35px] mt-20 px-6 pt-4 pb-1.5 bg-violet rounded-[25px] border border-white  hover:bg-blue-700 hover:bg-white hover:text-[#3B0A60] '
          onClick={() => toProjectsHandler()}
        >
          Detaily
        </button>
      </div>
    </div>
  )
}

export default Projects
