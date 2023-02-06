import React, { useState, useEffect } from 'react'
import { TitleText, TypingText } from '../components'
import { motion } from 'framer-motion'
import { staggerContainer } from '../motion'
import styles from '../styles'
import Translation from '../components/Languages/Data.json'

const Hero = ({ language }) => {
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
    <>
      <div className='flex lg:flex-row flex-col justify-center items-center mx-[10%] py-[100px]'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 lg:py-[100px] py-[50px]`}
        >
          <div className='flex flex-col justify-left'>
            <h1 className='text-white text-[7rem]'>
              <TypingText
                title={
                  language === 'romanian'
                    ? 'Webs'
                    : language === 'slovak'
                    ? 'Weby.'
                    : 'Webs.'
                }
              />
            </h1>
            <h1 className='text-white text-[70px] mb-[2rem]'>
              <TypingText
                title={
                  language === 'romanian'
                    ? 'Eshops'
                    : language === 'slovak'
                    ? 'Eshopy.'
                    : 'Eshop.'
                }
              />
            </h1>

            <div className='text-white text-[50px]'>
              <TitleText
                title={
                  language === 'romanian'
                    ? 'Tehnologii moderne.'
                    : language === 'slovak'
                    ? 'Moderné technológie.'
                    : 'Modern technologies.'
                }
              />
            </div>
          </div>
        </motion.div>
        <div className='lg:w-[100%]'>
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
