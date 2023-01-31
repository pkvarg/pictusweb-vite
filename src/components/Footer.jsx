import { motion } from 'framer-motion'

import styles from '../styles'
import { footerVariants } from '../motion'

const Footer = () => (
  <>
    <div>
      <motion.footer
        variants={footerVariants}
        initial='hidden'
        whileInView='show'

        // className={`${styles.xPaddings} py-8 relative`}
      >
        <div className='footer-gradient' />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div className='flex items-center justify-between flex-wrap gap-5'></div>

          <div className='flex flex-col'>
            <div className='mb-[50px] h-[2px] opacity-10' />

            <div className='flex items-center justify-between flex-wrap gap-4'>
              <h4 className='font-extrabold text-[24px] text-white'>
                METAVERUS
              </h4>
              <p className='font-normal text-[14px] text-white opacity-50'>
                Copyright © 2021 - 2022 Metaversus. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
      <div className='bg:hero-gradient h-20'></div>
    </div>
  </>
)

export default Footer
