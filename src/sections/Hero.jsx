import React, { useState, useEffect } from 'react'
import { TitleText, TypingText } from '../components'
import { motion } from 'framer-motion'
import { staggerContainer } from '../motion'
import styles from '../styles'
import Translation from '../components/Languages/Data.json'

const Hero = ({ language }) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language == 'slovak') {
      setContent(Translation.slovak)
    } else setContent(Translation.english)
  })

  let tit = []
  let cht = content.heroTitle1

  return (
    <>
      <div className='flex lg:flex-row flex-col justify-center items-center mx-[10%] py-[100px]'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 lg:py-[100px] py-[50px]`}
        >
          <div className='flex flex-col justify-left lg:w-[50%]'>
            <h1 className='text-white text-[7rem]'>
              {/* <TypingText title={cht} /> */}
              {content.heroTitle1}
            </h1>
            <h1 className='text-white text-[70px] mb-[2rem]'>
              {/* <TypingText title='Eshopy.' /> */}
              {content.heroTitle2}
            </h1>

            <div className='text-white text-[50px]'>
              {/* <TitleText title='Moderné technológie.' /> */}
              {content.heroTitle3}
            </div>
          </div>
        </motion.div>
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
