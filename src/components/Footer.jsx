import { motion } from 'framer-motion'

import styles from '../styles'
import { footerVariants } from '../motion'

const Footer = () => (
  <>
    <div className='mx-3'>
      <motion.footer
        variants={footerVariants}
        initial='hidden'
        whileInView='show'
      >
        {/* <div className='footer-gradient' /> */}
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
          <div className='mb-[10px] h-[2px] bg-white opacity-10' />

          <div className='flex flex-col'>
            <div className='flex lg:flex-row flex-col items-center justify-between flex-wrap gap-4'>
              <div className='flex lg:flex-row flex-col gap-2 justify-center items-center'>
                <h4 className='font-extrabold text-[24px] flex-nowrap text-white'>
                  Copyright &copy; {Date().substring(11, 15)}
                </h4>
                <h4 className='font-extrabold text-[24px] text-white'>
                  Pictusweb s.r.o.
                </h4>
              </div>

              <a className='font-extrabold text-[24px] text-white' href='/gdpr'>
                GDPR
              </a>
              <a
                className='font-extrabold text-[24px] text-white'
                href='/trade-rules'
              >
                Obchodné podmienky
              </a>
              <p className='font-normal text-[24px] text-white opacity-50'>
                WhatsApp: +421 904 798 505
                <br />
                <a href='mailto:info@pictusweb.sk'>Email: info@pictusweb.sk</a>
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
