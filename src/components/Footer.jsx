import { motion } from 'framer-motion'

import styles from '../styles'
import { footerVariants } from '../motion'

const Footer = () => (
  <>
    <div className='mx-8'>
      <motion.footer
        variants={footerVariants}
        initial='hidden'
        whileInView='show'
      >
        <div className={`flex flex-col gap-8`}>
          <div className='mb-[10px] h-[2px] bg-white opacity-10' />

          <div className='flex flex-col text-[20px]'>
            <div className='flex lg:flex-row flex-col items-center justify-between flex-wrap gap-4 mx-0  lg:mx-12'>
              <div className='flex lg:flex-row flex-col gap-2 justify-center items-center'>
                <h4 className='font-extrabold  flex-nowrap text-white'>
                  Copyright &copy; {Date().substring(11, 15)}
                </h4>
                <h4 className='font-extrabold text-white'>Pictusweb s.r.o.</h4>
              </div>
              <a className='font-extrabold text-white' href='/about'>
                O firme
              </a>

              <a className='font-extrabold text-white' href='/gdpr'>
                GDPR
              </a>
              <a className='font-extrabold text-white' href='/trade-rules'>
                Obchodné podmienky
              </a>
              <p className='font-normal text-white  text-[17.5px] opacity-50'>
                WhatsApp: +421 904 798 505
                <br />
                <a href='mailto:info@pictusweb.sk'>email: info@pictusweb.sk</a>
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
      <div className='bg:hero-gradient h-10'></div>
    </div>
  </>
)

export default Footer
