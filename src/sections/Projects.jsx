import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { animate, motion } from 'framer-motion'
import Translation from '../components/Languages/Data.json'

const Projects = ({ language }) => {
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
  const navigate = useNavigate()
  const toProjectsHandler = () => {
    navigate('/projects')
  }
  return (
    <div className='text-white pt-10' id='projects'>
      <h1 className='text-center text-[50px] lg:text-[40px] mb-[120px]'>
        {content.projectsTitle}
      </h1>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className='flex flex-col  lg:flex-row justify-center lg:gap-2 gap-8 w-[90%] mx-auto'>
          <div
            onClick={() => navigate('/projects#ioana-illustrations')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/ioana-page.webp'
              alt='ioana-illustrations.eu'
            />
            <h3 className='text-[25px] text-center'>ioana-illustrations.eu</h3>
          </div>
          <div
            onClick={() => navigate('/projects#kvalitna-montaz')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/dvl-page.webp'
              alt='kvalitnamontaz.eu'
            />
            <h3 className='text-[25px] text-center'>kvalitnamontaz.sk</h3>
          </div>
          <div
            onClick={() => navigate('/projects#prud.sk')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/prud-page.webp'
              alt='prud.sk'
            />
            <h3 className='text-[25px] text-center'>prud.sk</h3>
          </div>
        </div>
        <div className='flex flex-col  lg:flex-row justify-center lg:gap-2 gap-8 w-[90%] lg:w-[90%] mx-auto mt-8'>
          <div
            onClick={() => navigate('/projects#bible-blog')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/bible-blog.webp'
              alt='next.bible-blog.online'
            />
            <h3 className='text-[25px] text-center'>bible-blog.online</h3>
          </div>
          <div
            onClick={() => navigate('/projects#cesta-zivota')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/cestazivota.webp'
              alt='cestazivota.sk'
            />
            <h3 className='text-[25px] text-center'>
              cirkev BA ...cestazivota.sk
            </h3>
          </div>
          <div
            onClick={() => navigate('/projects#michal-dovala')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/md.webp'
              alt='michaldovala.sk'
            />
            <h3 className='text-[25px] text-center'>michaldovala.sk</h3>
          </div>
        </div>
        {/* <div className='flex flex-col  lg:flex-row justify-center lg:gap-2 gap-8 w-[90%] lg:w-[90%] mx-auto mt-8'>
          <div
            onClick={() => navigate('/projects#bible-blog')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/bible-blog.webp'
              alt='next.bible-blog.online'
            />
            <h3 className='text-[25px] text-center'>cirkevba.sk</h3>
          </div>
          <div
            onClick={() => navigate('/projects#cesta-zivota')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/cestazivota.webp'
              alt='cestazivota.sk'
            />
            <h3 className='text-[25px] text-center'>cestazivota.sk</h3>
          </div>
          <div
            onClick={() => navigate('/projects#michal-dovala')}
            className='flex flex-col gap-3 cursor-pointer'
          >
            <img
              className='w-[100rem] rounded-xl'
              src='/md.webp'
              alt='michaldovala.sk'
            />
            <h3 className='text-[25px] text-center'>michaldovala.sk</h3>
          </div>
        </div> */}
      </motion.div>
      {/* <div className='flex justify-center'>
        <button
          className='text-[25px] lg:text-[25px] mt-20 px-4 pt-4 pb-1.5 bg-violet rounded-[25px] border border-white  hover:bg-blue-700 hover:bg-white hover:text-[#3B0A60] '
          onClick={() => toProjectsHandler()}
        >
          {content.projectsDetails}
        </button>
      </div> */}
    </div>
  )
}

export default Projects
